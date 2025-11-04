# LEAN DATA MANAGER Landing & Mini-Funnel

Landing page y funnel de generación de leads para **LEAN DATA MANAGER (leandm.dev)**, construido con React + Vite + TypeScript y desplegado sobre infraestructura serverless de AWS protegida por Cloudflare.

## Tabla de contenido

1. [Características principales](#características-principales)
2. [Requisitos previos](#requisitos-previos)
3. [Instalación y ejecución local](#instalación-y-ejecución-local)
4. [Variables de entorno](#variables-de-entorno)
5. [Despliegue del frontend](#despliegue-del-frontend)
6. [Infraestructura como código (Terraform)](#infraestructura-como-código-terraform)
7. [Configuración posterior al despliegue](#configuración-posterior-al-despliegue)
8. [Analítica y consentimiento](#analítica-y-consentimiento)
9. [Seguridad y cumplimiento](#seguridad-y-cumplimiento)
10. [Consultas sobre logs (Athena)](#consultas-sobre-logs-athena)
11. [Checklist de reemplazos antes de producción](#checklist-de-reemplazos-antes-de-producción)

## Características principales

- **Copy Hook-Story-Offer** enfocado a directores y gerentes de planta industrial.
- **CTA dual**: agendar demo (Calendly) y descargar checklist OEE (lead magnet).
- **Formularios con Cloudflare Turnstile**, API Gateway + Lambda (Node.js) + DynamoDB + SES para registro seguro y notificaciones.
- **Analítica opcional**: Google Analytics 4 y Cloudflare Web Analytics con consentimiento explícito.
- **SEO ready**: metas OpenGraph/Twitter, sitemap y robots listos.
- **Legales**: páginas de Aviso de Privacidad y Términos y Condiciones con placeholders profesionales (cumplimiento México).
- **Infraestructura costo-eficiente**: SPA estática en S3 privado, servida por CloudFront con OAC y Cloudflare como proxy.
- **CI/CD** mediante GitHub Actions para build, sync a S3 e invalidación de CloudFront.

## Requisitos previos

- Node.js 20+
- npm o pnpm (se asume npm en los ejemplos)
- AWS CLI configurado con permisos para S3, CloudFront, DynamoDB, Lambda, API Gateway y SES
- Terraform 1.6+
- Cuenta de Cloudflare con acceso al dominio `leandm.dev`
- Claves de Cloudflare Turnstile (Site Key + Secret Key)
- Calendly (para el enlace `VITE_CALENDLY_URL`)

## Instalación y ejecución local

```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`.

> **Nota:** Para pruebas locales de formularios puedes usar las claves de ejemplo de Turnstile (sitekey `1x00000000000000000000AA`) y configurar un endpoint temporal que responda 200. Ajusta la lógica según tu entorno.

## Variables de entorno

Revisa `.env.example` y crea un archivo `.env` con tus valores reales:

- `VITE_API_GATEWAY_URL`: endpoint público de API Gateway (ej. `https://xxxx.execute-api.us-east-1.amazonaws.com/prod/leads`).
- `VITE_TURNSTILE_SITEKEY`: site key de Cloudflare Turnstile.
- `VITE_GA4_ID`: ID de medición de Google Analytics 4 (opcional).
- `VITE_CF_WEB_ANALYTICS_TOKEN`: token de Cloudflare Web Analytics (opcional).
- `VITE_CALENDLY_URL`: enlace público a la página de agendado de demo.

## Despliegue del frontend

1. Genera el build estático:

   ```bash
   npm run build
   ```

2. Sincroniza manualmente con S3 (si no usas CI/CD aún):

   ```bash
   aws s3 sync dist s3://<TU_BUCKET_S3> --delete --cache-control "public, max-age=31536000" --exclude "index.html"
   aws s3 cp dist/index.html s3://<TU_BUCKET_S3>/index.html --cache-control "no-cache, no-store, must-revalidate"
   ```

3. Invalida la caché de CloudFront:

   ```bash
   aws cloudfront create-invalidation --distribution-id <ID_DISTRIBUCION> --paths "/*"
   ```

El workflow [`ci-cd.yml`](.github/workflows/ci-cd.yml) automatiza estos pasos al hacer push a `main`, usando GitHub OIDC para asumir un rol de despliegue en AWS.

## Infraestructura como código (Terraform)

El directorio [`infra/terraform`](infra/terraform) define todos los recursos:

- Buckets S3 (sitio y logs), CloudFront con OAC, certificación TLS (ACM en us-east-1) y función para cabeceras de seguridad.
- API Gateway HTTP + Lambda (Node.js 18) + DynamoDB + SES para captura de leads.
- Registros DNS, WAF rulesets, Bot Fight Mode y ajustes de zona Cloudflare.

### Pasos para desplegar

1. Exporta las variables necesarias o usa `terraform.tfvars`:

```hcl
aws_region            = "us-east-1"
site_bucket_name      = "leandm-static-site"
logs_bucket_name      = "leandm-cloudfront-logs"
root_domain           = "leandm.dev"
contact_email         = "ops@leandm.dev"
turnstile_secret_key  = "0x000000000000000000000000000000000000"
ses_sender_email      = "notificaciones@leandm.dev"
cloudflare_api_token  = "<token_dns_waf>"
cloudflare_account_id = "<account_id>"
cloudflare_zone_id    = "<zone_id>"
```

2. Inicializa y aplica:

   ```bash
   cd infra/terraform
   terraform init
   terraform plan
   terraform apply
   ```

3. Terraform creará un archivo `lambda.zip` al empacar el handler. El output mostrará:
   - `api_gateway_url`: úsalo en `VITE_API_GATEWAY_URL`.
   - `cloudfront_domain`: apúntalo con Cloudflare.
   - `s3_bucket_name`: bucket privado del sitio.

El workflow [`terraform.yml`](.github/workflows/terraform.yml) permite ejecutar `plan` o `apply` manualmente desde GitHub Actions mediante `workflow_dispatch`.

## Configuración posterior al despliegue

1. **Cloudflare DNS:** verifica que los CNAME de raíz y `www` estén en modo **Proxied (nube naranja)** apuntando al dominio de CloudFront.
2. **SES fuera de sandbox:** solicita el aumento de cuota en SES para enviar correos a direcciones no verificadas. Guía oficial: [AWS SES Request Production Access](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html).
3. **Cloudflare Turnstile:** crea el sitio en [dash.cloudflare.com/turnstile](https://dash.cloudflare.com/turnstile) y actualiza `VITE_TURNSTILE_SITEKEY` y `turnstile_secret_key` en Terraform.
4. **Calendly:** actualiza `VITE_CALENDLY_URL` con el enlace real de agendado.
5. **Logs y métricas:** configura retención en CloudWatch según compliance y habilita consultas en Athena (ver sección siguiente).
6. **Reemplaza contenido placeholder:** logos, testimonios, textos legales, PDF del lead magnet, imágenes OpenGraph.

## Analítica y consentimiento

- El banner de cookies bloquea cualquier script de terceros hasta que el usuario hace clic en **Aceptar**.
- Al conceder consentimiento se inyectan de forma diferida: GA4 (`gtag.js`), Cloudflare Web Analytics y el widget de Calendly.
- El estado del consentimiento se guarda en `localStorage` (`leandm-cookie-consent`).
- Eventos clave enviados a GA4:
  - `lead_submitted`: al completar cualquier formulario.
  - `demo_booked`, `lead_confirmed`, `ebook_downloaded`: disparados en la pantalla de `/gracias` según el parámetro `type`.

## Seguridad y cumplimiento

- **Cabeceras de seguridad:** aplicadas desde una CloudFront Function (`Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) y `Content-Security-Policy` personalizada.
- **CSP recomendada:**

  ```text
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com https://assets.calendly.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://region1.analytics.google.com https://static.cloudflareinsights.com;
  frame-src https://calendly.com;
  ```

- **Cloudflare:** DNS proxied, Bot Fight Mode activo y reglas WAF para bloquear rutas comunes de ataques.
- **AWS:** buckets privados, OAC de CloudFront, DynamoDB en modo on-demand y SES para notificaciones.
- **Turnstile:** valida que cada lead sea legítimo antes de persistir y enviar correo.

## Consultas sobre logs (Athena)

CloudFront envía logs al bucket definido en `logs_bucket_name`. Crea una tabla en Athena para analizarlos:

```sql
CREATE EXTERNAL TABLE IF NOT EXISTS cloudfront_logs (
  date DATE,
  time STRING,
  location STRING,
  bytes BIGINT,
  request_ip STRING,
  method STRING,
  host STRING,
  uri STRING,
  status INT,
  referrer STRING,
  user_agent STRING,
  query_string STRING,
  cookie STRING,
  result_type STRING,
  request_id STRING
)
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
WITH SERDEPROPERTIES (
  'field.delim' = '\t'
)
LOCATION 's3://leandm-cloudfront-logs/cloudfront/';
```

Ejemplo de consulta para contar visitas únicas por día:

```sql
SELECT date, COUNT(DISTINCT request_ip) AS visitantes
FROM cloudfront_logs
WHERE status = 200
GROUP BY date
ORDER BY date DESC
LIMIT 30;
```

## Checklist de reemplazos antes de producción

- [ ] Actualizar textos legales en `/privacidad` y `/terminos` con revisión jurídica.
- [ ] Sustituir `public/leadmagnet/checklist-oee.pdf` por la versión final.
- [ ] Reemplazar logos de clientes, testimonios y métricas con información real.
- [ ] Ajustar imágenes, favicon y metadatos OpenGraph (`public/og-image.webp`).
- [ ] Verificar que los enlaces de Calendly, demo y checklist estén actualizados.
- [ ] Confirmar salida de sandbox de SES y direcciones de notificación correctas.
- [ ] Validar funcionamiento de Turnstile y eventos GA4 en ambiente productivo.

---

> **Soporte:** escribe a `ops@leandm.dev` para dudas relacionadas con la implementación o despliegue.
