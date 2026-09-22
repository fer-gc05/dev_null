import type { SearchIndexItem } from './types'

export const searchIndex: SearchIndexItem[] = [
  // Comandos
  { id: 'cmd-1', section: 'Comandos', title: 'pwd', path: '/comandos-backend', keywords: ['ruta', 'directorio', 'actual'] },
  { id: 'cmd-2', section: 'Comandos', title: 'cd -', path: '/comandos-backend', keywords: ['volver', 'anterior', 'directorio'] },
  { id: 'cmd-3', section: 'Comandos', title: 'ls -lh', path: '/comandos-backend', keywords: ['listar', 'archivos', 'tamaño'] },
  { id: 'cmd-4', section: 'Comandos', title: 'mkdir -p', path: '/comandos-backend', keywords: ['crear', 'carpeta', 'directorio'] },
  { id: 'cmd-5', section: 'Comandos', title: 'tree -L 2', path: '/comandos-backend', keywords: ['árbol', 'estructura', 'directorios'] },
  { id: 'cmd-6', section: 'Comandos', title: 'cat / less', path: '/comandos-backend', keywords: ['ver', 'archivo', 'contenido'] },
  { id: 'cmd-7', section: 'Comandos', title: 'head / tail', path: '/comandos-backend', keywords: ['primeras', 'últimas', 'líneas', 'log'] },
  { id: 'cmd-8', section: 'Comandos', title: 'nano / vim', path: '/comandos-backend', keywords: ['editar', 'texto', 'editor'] },
  { id: 'cmd-9', section: 'Comandos', title: 'grep', path: '/comandos-backend', keywords: ['buscar', 'texto', 'encontrar'] },
  { id: 'cmd-10', section: 'Comandos', title: 'wc -l', path: '/comandos-backend', keywords: ['contar', 'líneas', 'número'] },
  { id: 'cmd-11', section: 'Comandos', title: 'curl', path: '/comandos-backend', keywords: ['http', 'api', 'petición', 'request'] },
  { id: 'cmd-12', section: 'Comandos', title: 'ping', path: '/comandos-backend', keywords: ['conectividad', 'dns', 'red', 'servidor'] },
  { id: 'cmd-13', section: 'Comandos', title: 'ss -tulnp', path: '/comandos-backend', keywords: ['puertos', 'escucha', 'sockets'] },
  { id: 'cmd-14', section: 'Comandos', title: 'lsof', path: '/comandos-backend', keywords: ['puerto', 'proceso', 'ocupado', 'eaddrinuse'] },
  { id: 'cmd-15', section: 'Comandos', title: 'dig', path: '/comandos-backend', keywords: ['dns', 'registros', 'dominio'] },
  { id: 'cmd-16', section: 'Comandos', title: 'ps aux', path: '/comandos-backend', keywords: ['procesos', 'activos', 'filtrar'] },
  { id: 'cmd-17', section: 'Comandos', title: 'top / htop', path: '/comandos-backend', keywords: ['monitoreo', 'cpu', 'ram', 'recursos'] },
  { id: 'cmd-18', section: 'Comandos', title: 'kill -9', path: '/comandos-backend', keywords: ['matar', 'proceso', 'sigkill', 'forzar'] },
  { id: 'cmd-19', section: 'Comandos', title: 'systemctl status', path: '/comandos-backend', keywords: ['servicio', 'estado', 'nginx', 'systemd'] },
  { id: 'cmd-20', section: 'Comandos', title: 'journalctl', path: '/comandos-backend', keywords: ['logs', 'systemd', 'servicio', 'errores'] },
  { id: 'cmd-21', section: 'Comandos', title: 'tail -f', path: '/comandos-backend', keywords: ['log', 'tiempo', 'real', 'seguir'] },
  { id: 'cmd-22', section: 'Comandos', title: 'df -h', path: '/comandos-backend', keywords: ['disco', 'espacio', 'almacenamiento'] },
  { id: 'cmd-23', section: 'Comandos', title: 'du -sh', path: '/comandos-backend', keywords: ['peso', 'tamaño', 'carpeta', 'directorio'] },
  { id: 'cmd-24', section: 'Comandos', title: 'history | grep', path: '/comandos-backend', keywords: ['historial', 'comandos', 'recuperar'] },
  { id: 'cmd-25', section: 'Comandos', title: '2> /dev/null', path: '/comandos-backend', keywords: ['silenciar', 'errores', 'stderr', 'devnull'] },

  // Arquitectura
  { id: 'arch-1', section: 'Arquitectura', title: 'Hardware', path: '/arquitectura', keywords: ['cpu', 'ram', 'disco', 'componentes', 'físico'] },
  { id: 'arch-2', section: 'Arquitectura', title: 'Kernel', path: '/arquitectura', keywords: ['núcleo', 'scheduler', 'drivers', 'memoria'] },
  { id: 'arch-3', section: 'Arquitectura', title: 'Shell', path: '/arquitectura', keywords: ['bash', 'zsh', 'intérprete', 'comandos'] },
  { id: 'arch-4', section: 'Arquitectura', title: 'Espacio de Usuario', path: '/arquitectura', keywords: ['aplicaciones', 'procesos', 'nginx', 'docker'] },

  // Flujo
  { id: 'flow-1', section: 'Flujo', title: 'stdout', path: '/flujo', keywords: ['salida', 'estándar', 'canal', 'éxito'] },
  { id: 'flow-2', section: 'Flujo', title: 'stderr', path: '/flujo', keywords: ['error', 'salida', 'canal', 'fallos'] },
  { id: 'flow-3', section: 'Flujo', title: 'Pipes', path: '/flujo', keywords: ['tubería', '|', 'encadenar', 'comandos'] },
  { id: 'flow-4', section: 'Flujo', title: '/dev/null', path: '/flujo', keywords: ['agujero', 'negro', 'descartar', 'basura'] },

  // Permisos
  { id: 'perm-1', section: 'Permisos', title: '/etc', path: '/permisos', keywords: ['configuración', 'sistema', 'nginx', 'php'] },
  { id: 'perm-2', section: 'Permisos', title: '/home', path: '/permisos', keywords: ['usuarios', 'directorios', 'personales'] },
  { id: 'perm-3', section: 'Permisos', title: '/var', path: '/permisos', keywords: ['logs', 'variables', 'www', 'web'] },
  { id: 'perm-4', section: 'Permisos', title: '/dev', path: '/permisos', keywords: ['dispositivos', 'devnull', 'archivos'] },
  { id: 'perm-5', section: 'Permisos', title: 'chmod', path: '/permisos', keywords: ['permisos', 'modos', 'ejecutable', 'rwx'] },
  { id: 'perm-6', section: 'Permisos', title: 'root vs regular', path: '/permisos', keywords: ['usuarios', 'uid', 'superusuario', 'sudo'] },

  // Procesos
  { id: 'proc-1', section: 'Procesos', title: 'PID', path: '/procesos', keywords: ['identificación', 'proceso', 'número'] },
  { id: 'proc-2', section: 'Procesos', title: 'Daemons', path: '/procesos', keywords: ['demonios', 'segundo', 'plano', 'servicios'] },
  { id: 'proc-3', section: 'Procesos', title: 'htop', path: '/procesos', keywords: ['monitoreo', 'tareas', 'cpu', 'ram'] },
  { id: 'proc-4', section: 'Procesos', title: 'kill', path: '/procesos', keywords: ['matar', 'proceso', 'sigkill', 'sigterm'] }
]
