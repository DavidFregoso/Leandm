# Leandm

Frontend React + Vite + TypeScript ubicado en `apps/web` y preparado para desplegarse en GitHub Pages en [`https://davidfregoso.github.io/Leandm/`](https://davidfregoso.github.io/Leandm/).

## Tecnologías

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) con configuración específica para `gh-pages`
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) usando `HashRouter` para evitar errores 404 al refrescar

## Scripts disponibles (apps/web)

- `npm run dev`: modo desarrollo en `http://localhost:5173`
- `npm run build`: build estándar
- `npm run build:gh`: build con `base` ajustado a `/Leandm/`
- `npm run preview`: vista previa del build
- `npm run lint`: linting de archivos `.ts` y `.tsx`

## GH Pages (Actions)

En Settings → Pages: Source = GitHub Actions.

Commit/push a main.

Verifica Actions → pages build and deployment (debe compilar apps/web, subir artifact apps/web/dist y desplegar).

Abre https://davidfregoso.github.io/Leandm/ (debe cargar assets/*.js bajo /Leandm/ y no /src/main.tsx).

### ¿Por qué fallaba antes?

El workflow automático invocaba actions/jekyll-build-pages y buscaba /docs → error Jekyll/SCSS.

setup-node con cache: npm esperaba un lock file → error “Dependencies lock file is not found”.

### Soluciones aplicadas

Publicación por artifact con deploy-pages (sin Jekyll) + .nojekyll.

Instalación resiliente: npm ci si hay lock, npm i si no.

### Resultado esperado

En Actions: “pages build and deployment” pasa; “jekyll-build-pages” ya no aparece.

En el navegador: sin GET /src/main.tsx 404; ahora se cargan GET /Leandm/assets/*.js.

URL final funcionando: https://davidfregoso.github.io/Leandm/.
