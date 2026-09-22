import type { SearchIndexItem } from './types'

const cmdSection = { es: 'Comandos', en: 'Commands' }
const archSection = { es: 'Arquitectura', en: 'Architecture' }
const flowSection = { es: 'Flujo', en: 'Data Flow' }
const permSection = { es: 'Permisos', en: 'Permissions' }
const procSection = { es: 'Procesos', en: 'Processes' }

export const searchIndex: SearchIndexItem[] = [
  // Commands
  { id: 'cmd-1', section: cmdSection, title: 'pwd', path: '/commands', keywords: ['ruta', 'directorio', 'actual', 'path', 'directory'] },
  { id: 'cmd-2', section: cmdSection, title: 'cd -', path: '/commands', keywords: ['volver', 'anterior', 'directorio', 'previous', 'back'] },
  { id: 'cmd-3', section: cmdSection, title: 'ls -lh', path: '/commands', keywords: ['listar', 'archivos', 'tamaño', 'list', 'files', 'size'] },
  { id: 'cmd-4', section: cmdSection, title: 'mkdir -p', path: '/commands', keywords: ['crear', 'carpeta', 'directorio', 'create', 'folder'] },
  { id: 'cmd-5', section: cmdSection, title: 'tree -L 2', path: '/commands', keywords: ['árbol', 'estructura', 'directorios', 'tree', 'structure'] },
  { id: 'cmd-6', section: cmdSection, title: 'cat / less', path: '/commands', keywords: ['ver', 'archivo', 'contenido', 'view', 'file', 'content'] },
  { id: 'cmd-7', section: cmdSection, title: 'head / tail', path: '/commands', keywords: ['primeras', 'últimas', 'líneas', 'log', 'first', 'last', 'lines'] },
  { id: 'cmd-8', section: cmdSection, title: 'nano / vim', path: '/commands', keywords: ['editar', 'texto', 'editor', 'edit'] },
  { id: 'cmd-9', section: cmdSection, title: 'grep', path: '/commands', keywords: ['buscar', 'texto', 'encontrar', 'search', 'find'] },
  { id: 'cmd-10', section: cmdSection, title: 'wc -l', path: '/commands', keywords: ['contar', 'líneas', 'número', 'count'] },
  { id: 'cmd-11', section: cmdSection, title: 'curl', path: '/commands', keywords: ['http', 'api', 'petición', 'request'] },
  { id: 'cmd-12', section: cmdSection, title: 'ping', path: '/commands', keywords: ['conectividad', 'dns', 'red', 'servidor', 'network'] },
  { id: 'cmd-13', section: cmdSection, title: 'ss -tulnp', path: '/commands', keywords: ['puertos', 'escucha', 'sockets', 'ports'] },
  { id: 'cmd-14', section: cmdSection, title: 'lsof', path: '/commands', keywords: ['puerto', 'proceso', 'ocupado', 'eaddrinuse'] },
  { id: 'cmd-15', section: cmdSection, title: 'dig', path: '/commands', keywords: ['dns', 'registros', 'dominio', 'records'] },
  { id: 'cmd-16', section: cmdSection, title: 'ps aux', path: '/commands', keywords: ['procesos', 'activos', 'filtrar', 'processes'] },
  { id: 'cmd-17', section: cmdSection, title: 'top / htop', path: '/commands', keywords: ['monitoreo', 'cpu', 'ram', 'recursos', 'monitor'] },
  { id: 'cmd-18', section: cmdSection, title: 'kill -9', path: '/commands', keywords: ['matar', 'proceso', 'sigkill', 'forzar', 'kill'] },
  { id: 'cmd-19', section: cmdSection, title: 'systemctl status', path: '/commands', keywords: ['servicio', 'estado', 'nginx', 'systemd', 'service'] },
  { id: 'cmd-20', section: cmdSection, title: 'journalctl', path: '/commands', keywords: ['logs', 'systemd', 'servicio', 'errores'] },
  { id: 'cmd-21', section: cmdSection, title: 'tail -f', path: '/commands', keywords: ['log', 'tiempo', 'real', 'seguir', 'follow'] },
  { id: 'cmd-22', section: cmdSection, title: 'df -h', path: '/commands', keywords: ['disco', 'espacio', 'almacenamiento', 'disk'] },
  { id: 'cmd-23', section: cmdSection, title: 'du -sh', path: '/commands', keywords: ['peso', 'tamaño', 'carpeta', 'directorio', 'size'] },
  { id: 'cmd-24', section: cmdSection, title: 'history | grep', path: '/commands', keywords: ['historial', 'comandos', 'recuperar', 'history'] },
  { id: 'cmd-25', section: cmdSection, title: '2> /dev/null', path: '/commands', keywords: ['silenciar', 'errores', 'stderr', 'devnull', 'silence'] },

  // Architecture
  { id: 'arch-1', section: archSection, title: 'Hardware', path: '/architecture', keywords: ['cpu', 'ram', 'disco', 'componentes', 'físico', 'physical'] },
  { id: 'arch-2', section: archSection, title: 'Kernel', path: '/architecture', keywords: ['núcleo', 'scheduler', 'drivers', 'memoria', 'memory'] },
  { id: 'arch-3', section: archSection, title: 'Shell', path: '/architecture', keywords: ['bash', 'zsh', 'intérprete', 'comandos', 'interpreter'] },
  { id: 'arch-4', section: archSection, title: 'Espacio de Usuario', path: '/architecture', keywords: ['aplicaciones', 'procesos', 'nginx', 'docker', 'user space'] },

  // Flow
  { id: 'flow-1', section: flowSection, title: 'stdout', path: '/flow', keywords: ['salida', 'estándar', 'canal', 'éxito', 'output'] },
  { id: 'flow-2', section: flowSection, title: 'stderr', path: '/flow', keywords: ['error', 'salida', 'canal', 'fallos'] },
  { id: 'flow-3', section: flowSection, title: 'Pipes', path: '/flow', keywords: ['tubería', '|', 'encadenar', 'comandos'] },
  { id: 'flow-4', section: flowSection, title: '/dev/null', path: '/flow', keywords: ['agujero', 'negro', 'descartar', 'basura', 'black hole'] },

  // Permissions
  { id: 'perm-1', section: permSection, title: '/etc', path: '/permissions', keywords: ['configuración', 'sistema', 'nginx', 'php', 'config'] },
  { id: 'perm-2', section: permSection, title: '/home', path: '/permissions', keywords: ['usuarios', 'directorios', 'personales', 'users'] },
  { id: 'perm-3', section: permSection, title: '/var', path: '/permissions', keywords: ['logs', 'variables', 'www', 'web'] },
  { id: 'perm-4', section: permSection, title: '/dev', path: '/permissions', keywords: ['dispositivos', 'devnull', 'archivos', 'devices'] },
  { id: 'perm-5', section: permSection, title: 'chmod', path: '/permissions', keywords: ['permisos', 'modos', 'ejecutable', 'rwx'] },
  { id: 'perm-6', section: permSection, title: 'root vs regular', path: '/permissions', keywords: ['usuarios', 'uid', 'superusuario', 'sudo'] },

  // Processes
  { id: 'proc-1', section: procSection, title: 'PID', path: '/processes', keywords: ['identificación', 'proceso', 'número'] },
  { id: 'proc-2', section: procSection, title: 'Daemons', path: '/processes', keywords: ['demonios', 'segundo', 'plano', 'servicios'] },
  { id: 'proc-3', section: procSection, title: 'htop', path: '/processes', keywords: ['monitoreo', 'tareas', 'cpu', 'ram'] },
  { id: 'proc-4', section: procSection, title: 'kill', path: '/processes', keywords: ['matar', 'proceso', 'sigkill', 'sigterm'] }
]
