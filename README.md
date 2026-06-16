# dev_null | Linux Interactivo

Aprende Linux de forma interactiva con una SPA construida con Vue 3 y Vite.

## Contenido

- **Arquitectura Linux**: Hardware, Kernel, Shell y Espacio de Usuario.
- **Flujo de Datos**: stdout, stderr, pipes y `/dev/null`.
- **Permisos y Archivos**: Sistema de archivos, usuarios, grupos y `chmod`.
- **Procesos y Daemons**: PID, daemons, `htop` y `kill -9`.

## Scripts

```bash
npm install    # Instalar dependencias
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run lint   # Revisar con ESLint
npm run format # Formatear con Prettier
```

## Estructura

```
src/
  components/   # Componentes reutilizables
  data/         # Datos de cada sección
  router/       # Configuración de Vue Router
  views/        # Vistas por pestaña
  App.vue       # Layout principal
  main.js       # Punto de entrada
  style.css     # Estilos globales unificados
```

## Deploy

El proyecto incluye `_redirects` para Netlify y `vercel.json` para Vercel gracias al uso de `createWebHistory` en Vue Router.
