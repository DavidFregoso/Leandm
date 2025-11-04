resource "cloudflare_record" "root_cname" {
  zone_id = var.cloudflare_zone_id
  name    = "@"
  type    = "CNAME"
  value   = aws_cloudfront_distribution.site.domain_name
  proxied = true
}

resource "cloudflare_record" "www_cname" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  value   = aws_cloudfront_distribution.site.domain_name
  proxied = true
}

resource "cloudflare_zone_settings_override" "settings" {
  zone_id = var.cloudflare_zone_id

  settings {
    ssl                     = "full"
    min_tls_version         = "1.2"
    automatic_https_rewrites = "on"
    always_use_https        = "on"
    brotli                  = "on"
    websockets              = "on"
    zero_rtt                = "on"
    bot_fight_mode          = "on"
  }
}

resource "cloudflare_ruleset" "waf_custom" {
  zone_id = var.cloudflare_zone_id
  name    = "leandm-waf-rules"
  kind    = "zone"
  phase   = "http_request_firewall_custom"

  rules {
    action      = "block"
    expression  = "(http.request.uri.path contains \"/wp-admin\")"
    description = "Bloquear rutas sospechosas de WordPress"
    enabled     = true
  }

  rules {
    action      = "challenge"
    expression  = "(cf.threat_score > 20)"
    description = "Desafiar solicitudes con alto puntaje de riesgo"
    enabled     = true
  }
}
