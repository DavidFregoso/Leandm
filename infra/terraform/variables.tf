variable "aws_region" {
  description = "Región AWS donde desplegar la infraestructura"
  type        = string
  default     = "us-east-1"
}

variable "site_bucket_name" {
  description = "Nombre del bucket S3 para la SPA"
  type        = string
}

variable "logs_bucket_name" {
  description = "Nombre del bucket para logs de CloudFront"
  type        = string
}

variable "cloudfront_price_class" {
  description = "Price class para la distribución de CloudFront"
  type        = string
  default     = "PriceClass_100"
}

variable "cloudflare_api_token" {
  description = "API token de Cloudflare con permisos de DNS y WAF"
  type        = string
}

variable "cloudflare_account_id" {
  description = "Account ID de Cloudflare (para referencias futuras)"
  type        = string
  default     = ""
}

variable "cloudflare_zone_id" {
  description = "Zone ID del dominio en Cloudflare"
  type        = string
}

variable "root_domain" {
  description = "Dominio raíz (ej. leandm.dev)"
  type        = string
}

variable "contact_email" {
  description = "Correo de contacto para tags y notificaciones"
  type        = string
}

variable "turnstile_secret_key" {
  description = "Clave secreta de Cloudflare Turnstile"
  type        = string
}

variable "ses_sender_email" {
  description = "Correo verificado en SES para enviar notificaciones"
  type        = string
}
