# Lean Data Manager Landing

Landing page y mini-funnel para Lean Data Manager (leandm.dev) construida con React, Vite, TypeScript y Tailwind CSS.

## Características principales

- Router con `HashRouter` para despliegue sin errores 404 en GitHub Pages.
- Scripts listos para GitHub Pages y migración posterior a AWS S3 + CloudFront con Object Access Control (OAC).
- Formularios conectados a Formspree y protegidos con Cloudflare Turnstile.
- Integraciones de analítica: Google Analytics 4, Microsoft Clarity y Cloudflare Web Analytics.
- Recursos de SEO (robots, sitemap, metadatos OG/Twitter) y lead magnet descargable.
- Copia comercial incluida con bloque de “Acciones inmediatas” y CTA repetido.

## Requerimientos

- Node.js 18+ (se recomienda la versión LTS más reciente).

## Variables de entorno

Crea un archivo `.env` en `apps/web` basado en `.env.example` ubicado en la raíz del repositorio.

```bash
cp .env.example apps/web/.env
```

Completa los valores para Formspree, Cloudflare Turnstile, analítica, Calendly y URL del sitio.

## Desarrollo local

```bash
cd apps/web
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Deploy en GitHub Pages (Actions)

1. Abre **Settings → Pages** y selecciona `GitHub Actions` como fuente.
2. Haz push a la rama `main` con los cambios.
3. Revisa **Actions → pages build and deployment** para confirmar el despliegue.
4. Accede a `https://davidfregoso.github.io/Leandm/` cuando finalice.

Si un deploy previo falló por Jekyll o compilaciones SCSS, esta configuración usa GitHub Actions con artifact estático (sin `jekyll-build-pages`). El script `scripts/prepare-pages.cjs` genera `404.html` y `.nojekyll` en `dist/` automáticamente.

## Migración a AWS S3 + CloudFront (OAC)

1. Configura los secretos `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET` y opcionalmente `CLOUDFRONT_DISTRIBUTION_ID` en el repositorio.
2. El workflow `Deploy to AWS S3` compila con `vite build` (base `/`) y sincroniza `apps/web/dist` con el bucket S3.
3. Para una migración manual ejecuta:

```bash
cd apps/web
npm install
npm run build
cd ../..
node scripts/prepare-pages.cjs
aws s3 sync apps/web/dist s3://TU_BUCKET --delete
```

4. Configura CloudFront con fallback 403/404 hacia `/index.html`.
5. Si en el futuro deseas usar `BrowserRouter`, cambia el router en `src/main.tsx` y actualiza la configuración de CloudFront o S3 según tu estrategia de rutas. El frontend no requiere cambios adicionales.

## Licencia

Distribuido bajo la licencia MIT. Consulta `LICENSE` para más información.
