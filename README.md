# Leandm

Proyecto React + Vite + TypeScript con Tailwind CSS preparado para desplegarse en GitHub Pages en la ruta [`https://davidfregoso.github.io/Leandm/`](https://davidfregoso.github.io/Leandm/).

## Tecnologías

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) con configuración específica para `gh-pages`
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) usando `HashRouter` para evitar errores 404 al refrescar

## Scripts disponibles

- `npm run dev`: modo desarrollo en `http://localhost:5173`
- `npm run build`: build estándar
- `npm run build:gh`: build con `base` ajustado a `/Leandm/`
- `npm run deploy:docs`: copia el contenido de `dist/` a `docs/`, genera `404.html` y `.nojekyll`
- `npm run preview`: vista previa del build
- `npm run lint`: linting de archivos `.ts` y `.tsx`

## Despliegue en GitHub Pages

Sigue los pasos en orden:

1. `npm i`
2. `npm run build:gh`
3. `npm run deploy:docs`
4. Realiza `git add docs`, `git commit` y `git push`
5. En GitHub: **Settings → Pages → Deploy from a branch → Branch: `main` / Folder: `/docs`**

Una vez guardada la configuración, publica el sitio desde [`https://davidfregoso.github.io/Leandm/`](https://davidfregoso.github.io/Leandm/) y fuerza una recarga con `Ctrl+F5` para verificar que los assets se sirvan desde `/Leandm/assets/...`.

## Estructura de rutas

El `HashRouter` expone las siguientes rutas en el hash de la URL:

- `#/` (Home)
- `#/checklist`
- `#/thanks`
- `#/privacy`
- `#/terms`

## Licencia

Este proyecto se entrega como base para despliegue en GitHub Pages. Ajusta los contenidos y estilos según sea necesario para producción.
