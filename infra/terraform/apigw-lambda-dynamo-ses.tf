data "archive_file" "lambda_package" {
  type        = "zip"
  source_file = "${path.module}/lambda/index.js"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_iam_role" "lambda" {
  name = "${local.project_name}-lead-handler"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = local.tags
}

resource "aws_iam_role_policy" "lambda" {
  name = "${local.project_name}-lambda-policy"
  role = aws_iam_role.lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem"
        ]
        Resource = aws_dynamodb_table.leads.arn
      },
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = "*"
      }
    ]
  })
}

resource "aws_dynamodb_table" "leads" {
  name         = "${local.project_name}-leads"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = local.tags
}

resource "aws_lambda_function" "lead_handler" {
  function_name = "${local.project_name}-lead-handler"
  role          = aws_iam_role.lambda.arn
  runtime       = "nodejs18.x"
  handler       = "index.handler"
  filename      = data.archive_file.lambda_package.output_path

  environment {
    variables = {
      DYNAMODB_TABLE       = aws_dynamodb_table.leads.name
      TURNSTILE_SECRET_KEY = var.turnstile_secret_key
      SES_SENDER           = var.ses_sender_email
      SES_RECIPIENT        = var.contact_email
    }
  }

  depends_on = [aws_iam_role_policy.lambda]

  tags = local.tags
}

resource "aws_apigatewayv2_api" "http" {
  name          = "${local.project_name}-leads-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["OPTIONS", "POST"]
    allow_headers = ["content-type"]
  }

  tags = local.tags
}

resource "aws_apigatewayv2_integration" "lambda" {
  api_id                 = aws_apigatewayv2_api.http.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.lead_handler.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "lead" {
  api_id    = aws_apigatewayv2_api.http.id
  route_key = "POST /leads"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/apigateway/${aws_apigatewayv2_api.http.name}"
  retention_in_days = 14

  tags = local.tags
}

resource "aws_apigatewayv2_stage" "prod" {
  api_id      = aws_apigatewayv2_api.http.id
  name        = "prod"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api.arn
    format = jsonencode({
      requestId  = "$context.requestId"
      ip         = "$context.identity.sourceIp"
      routeKey   = "$context.routeKey"
      status     = "$context.status"
      requestTime = "$context.requestTime"
    })
  }
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lead_handler.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http.execution_arn}/*/*"
}

output "api_gateway_url" {
  description = "URL base de la API de leads"
  value       = aws_apigatewayv2_stage.prod.invoke_url
}

output "cloudfront_domain" {
  description = "Dominio asignado por CloudFront"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "s3_bucket_name" {
  description = "Bucket S3 que almacena la SPA"
  value       = aws_s3_bucket.site.id
}
