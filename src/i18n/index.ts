import { ref, computed } from 'vue'

export type Locale = 'es' | 'en'

const locale = ref<Locale>('es')
const ready = ref(false)

export function initI18n() {
  if (ready.value) return
  const saved = localStorage.getItem('devnull-locale') as Locale | null
  if (saved && (saved === 'es' || saved === 'en')) {
    locale.value = saved
  } else {
    locale.value = 'es'
  }
  document.documentElement.lang = locale.value
  ready.value = true
}

export function setLocale(l: Locale) {
  locale.value = l
  localStorage.setItem('devnull-locale', l)
  document.documentElement.lang = l
}

export function toggleLocale() {
  setLocale(locale.value === 'es' ? 'en' : 'es')
}

export function t(key: string): string {
  return dict[key]?.[locale.value] ?? key
}

export type Bi = { es: string; en: string }

export function L(b: Bi): string {
  return b[locale.value] ?? b.es
}

export function useLocale() {
  const current = computed(() => locale.value)
  return { current, setLocale, toggleLocale, t, L, initI18n }
}

const dict: Record<string, { es: string; en: string }> = {
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.architecture': { es: 'Arquitectura', en: 'Architecture' },
  'nav.flow': { es: 'Flujo de Datos', en: 'Data Flow' },
  'nav.permissions': { es: 'Permisos', en: 'Permissions' },
  'nav.processes': { es: 'Procesos', en: 'Processes' },
  'nav.commands': { es: 'Comandos Backend', en: 'Commands' },
  'nav.about': { es: 'Sobre dev_null', en: 'About dev_null' },
  'search.placeholder': { es: 'Buscar...', en: 'Search...' },
  'search.shortcut': { es: '⌘K', en: '⌘K' },
  'sidebar.collapse': { es: 'Colapsar menú', en: 'Collapse menu' },
  'sidebar.expand': { es: 'Expandir menú', en: 'Expand menu' },
  'sidebar.search': { es: 'Buscar...', en: 'Search...' },
  'sidebar.channel': { es: 'Canal', en: 'Channel' },
  'terminal.clear': { es: 'Limpiar terminal', en: 'Clear terminal' },
  'terminal.title': { es: 'bash — 80×24', en: 'bash — 80×24' },
  'terminal.idle': { es: 'Selecciona "Probar en terminal" en un comando de abajo…', en: 'Select "Try in terminal" on a command below…' },
  'app.tagline': { es: 'Aprende Linux capa por capa, flujo por flujo.', en: 'Learn Linux layer by layer, flow by flow.' },
  'footer.copy': { es: 'Copiar', en: 'Copy' },
  'footer.try': { es: 'Probar', en: 'Try' },
  'footer.copied': { es: '¡Copiado!', en: 'Copied!' },
  'cmd.pwd': { es: 'Imprime la ruta absoluta actual', en: 'Print current absolute path' },
  'cmd.cd-prev': { es: 'Vuelve al directorio anterior', en: 'Return to previous directory' },
  'cmd.ls': { es: 'Lista archivos con tamaño legible', en: 'List files with human-readable sizes' },
  'cmd.mkdir': { es: 'Crea carpetas anidadas de una vez', en: 'Create nested directories at once' },
  'cmd.tree': { es: 'Muestra el árbol de directorios', en: 'Show directory tree' },
  'cmd.cat': { es: 'Muestra un archivo completo / paginado', en: 'Show entire file / paginated' },
  'cmd.head-tail': { es: 'Primeras / últimas líneas de un archivo', en: 'First / last lines of a file' },
  'cmd.nano-vim': { es: 'Editores de texto en terminal', en: 'Terminal text editors' },
  'cmd.grep': { es: 'Busca texto recursivamente ignorando binarios', en: 'Search text recursively ignoring binaries' },
  'cmd.wc': { es: 'Cuenta líneas', en: 'Count lines' },
  'cmd.curl': { es: 'Petición HTTP con headers', en: 'HTTP request with headers' },
  'cmd.ping': { es: 'Comprueba conectividad y DNS', en: 'Check connectivity and DNS' },
  'cmd.ss': { es: 'Puertos en escucha y su proceso', en: 'Listening ports and their process' },
  'cmd.lsof': { es: 'Proceso que ocupa un puerto específico', en: 'Process holding a specific port' },
  'cmd.dig': { es: 'Consulta registros DNS', en: 'Query DNS records' },
  'cmd.ps': { es: 'Filtra procesos activos', en: 'Filter active processes' },
  'cmd.top': { es: 'Monitoreo de CPU/RAM en vivo', en: 'Live CPU/RAM monitoring' },
  'cmd.kill': { es: 'Fuerza el cierre de un proceso (SIGKILL)', en: 'Force kill a process (SIGKILL)' },
  'cmd.systemctl': { es: 'Estado de un servicio del sistema', en: 'System service status' },
  'cmd.journalctl': { es: 'Logs de systemd de un servicio', en: 'systemd logs for a service' },
  'cmd.tail-f': { es: 'Sigue un log en tiempo real', en: 'Follow a log in real-time' },
  'cmd.df': { es: 'Espacio en disco disponible', en: 'Available disk space' },
  'cmd.du': { es: 'Peso de cada carpeta', en: 'Size of each folder' },
  'cmd.history': { es: 'Busca en comandos anteriores', en: 'Search in command history' },
  'cmd.null': { es: 'Silencia errores (stderr)', en: 'Silence errors (stderr)' },
  'cmd.block.nav': { es: 'Navegación', en: 'Navigation' },
  'cmd.block.files': { es: 'Archivos', en: 'Files' },
  'cmd.block.network': { es: 'Red y HTTP', en: 'Network & HTTP' },
  'cmd.block.processes': { es: 'Procesos y Recursos', en: 'Processes & Resources' },
  'cmd.block.logs': { es: 'Logs y cierre', en: 'Logs & Cleanup' },
  'perm.tab.files': { es: 'Sistema de Archivos', en: 'File System' },
  'perm.tab.perms': { es: 'Usuarios y Permisos', en: 'Users & Permissions' },
  'perm.tab.tree': { es: 'File Tree', en: 'File Tree' },
  'perm.fs.root': { es: '/ (Directorio Raíz)', en: '/ (Root Directory)' },
  'perm.fs.root.desc': { es: 'Es el nivel más alto del sistema de archivos. Todo en Linux cuelga de aquí. No es lo mismo que el usuario root.', en: 'The top level of the filesystem. Everything in Linux hangs from here. Not the same as the root user.' },
  'perm.fs.root.dev': { es: "Nunca ejecutes 'rm -rf /' o borrarás el sistema operativo entero.", en: "Never run 'rm -rf /' or you'll wipe the entire OS." },
  'perm.fs.bin': { es: '/bin & /sbin', en: '/bin & /sbin' },
  'perm.fs.bin.desc': { es: 'Contienen los Binarios (comandos ejecutables). Aquí viven los comandos que usas a diario como ls, cp, o mkdir.', en: 'Contains Binaries (executable commands). This is where daily commands like ls, cp, or mkdir live.' },
  'perm.fs.bin.dev': { es: 'Cuando instalas herramientas como PHP o Composer, sus ejecutables suelen enlazarse aquí para que puedas llamarlos desde cualquier lado.', en: 'When you install tools like PHP or Composer, their executables are often linked here so you can call them from anywhere.' },
  'perm.fs.etc': { es: '/etc', en: '/etc' },
  'perm.fs.etc.desc': { es: 'El centro de configuración del sistema. (Piensa en él como un archivo .env gigante para todo el sistema operativo).', en: 'The system configuration center. (Think of it as a giant .env file for the whole OS).' },
  'perm.fs.etc.dev': { es: 'Aquí configurarás los archivos de tus servidores como Nginx (/etc/nginx) o las variables globales de PHP (/etc/php/php.ini).', en: 'Here you configure your server files like Nginx (/etc/nginx) or PHP globals (/etc/php/php.ini).' },
  'perm.fs.home': { es: '/home', en: '/home' },
  'perm.fs.home.desc': { es: 'Los directorios personales de los usuarios. Cada usuario regular tiene su propia carpeta aquí.', en: 'Personal directories of users. Each regular user has their own folder here.' },
  'perm.fs.home.dev': { es: 'Tus proyectos personales, tus claves SSH (.ssh) y tus configuraciones de terminal (.zshrc) viven en /home/tu_usuario/.', en: 'Your personal projects, SSH keys (.ssh), and terminal configs (.zshrc) live in /home/your_user/.' },
  'perm.fs.var': { es: '/var', en: '/var' },
  'perm.fs.var.desc': { es: 'Datos Variables. Archivos que crecen y cambian constantemente con el tiempo.', en: 'Variable Data. Files that grow and change constantly over time.' },
  'perm.fs.var.dev': { es: 'Fundamental para backend. Aquí se guardan los logs del sistema (/var/log) y, a menudo, los archivos públicos de tu servidor web (/var/www/html).', en: 'Critical for backend. System logs (/var/log) and often your web server public files (/var/www/html) are stored here.' },
  'perm.fs.dev': { es: '/dev', en: '/dev' },
  'perm.fs.dev.desc': { es: "Archivos de Dispositivos (Devices). En Linux, 'todo es un archivo', incluso un disco duro o un micrófono.", en: 'Device Files. In Linux, everything is a file, even a hard drive or microphone.' },
  'perm.fs.dev.dev': { es: '¡Aquí vive el famoso /dev/null! El agujero negro donde enviamos la basura y la salida de errores que no queremos leer.', en: 'This is where the famous /dev/null lives! The black hole where we send garbage and error output we dont want to read.' },
  'perm.pm.root': { es: 'Usuarios: Root vs Regular', en: 'Users: Root vs Regular' },
  'perm.pm.root.desc': { es: 'Root (UID 0) es el superusuario que puede hacer todo. Los usuarios regulares tienen restricciones por seguridad.', en: 'Root (UID 0) is the superuser who can do anything. Regular users have restrictions for security.' },
  'perm.pm.root.code': { es: '$ sudo su\n# ¡Ahora eres Dios en el sistema!', en: '$ sudo su\n# You are now God in the system!' },
  'perm.pm.rwx': { es: 'rwx (Lectura, Escritura, Ejecución)', en: 'rwx (Read, Write, Execute)' },
  'perm.pm.rwx.desc': { es: "Los 3 permisos básicos.\n'r' (Read): Leer el archivo.\n'w' (Write): Modificarlo.\n'x' (Execute): Correrlo como un programa/script.", en: 'The 3 basic permissions.\nr (Read): Read the file.\nw (Write): Modify it.\nx (Execute): Run it as a program/script.' },
  'perm.pm.rwx.code': { es: '-rwxr--r-- 1 dev_null usuarios 1024 script.php', en: '-rwxr--r-- 1 dev_null users 1024 script.php' },
  'perm.pm.ugo': { es: 'Grupos de Permisos (UGO)', en: 'Permission Groups (UGO)' },
  'perm.pm.ugo.desc': { es: 'Los permisos se dividen en 3 bloques de caracteres:\n1. Owner (Dueño del archivo)\n2. Group (Grupo al que pertenece)\n3. Others (Cualquier otro usuario)', en: 'Permissions are divided into 3 character blocks:\n1. Owner (File owner)\n2. Group (Group it belongs to)\n3. Others (Any other user)' },
  'perm.pm.ugo.code': { es: '$ ls -la\n-rwxr-xr-- (Dueño: rwx | Grupo: r-x | Otros: r--)', en: '$ ls -la\n-rwxr-xr-- (Owner: rwx | Group: r-x | Others: r--)' },
  'perm.pm.chmod': { es: 'Comando: chmod +x', en: 'Command: chmod +x' },
  'perm.pm.chmod.desc': { es: "Cambia los modos (Change Mode). Al usar '+x' le estás diciendo al sistema: 'Convierte este archivo de texto en un script ejecutable'.", en: "Changes modes (Change Mode). Using '+x' tells the system: 'Turn this text file into an executable script'." },
  'perm.pm.chmod.code': { es: '$ chmod +x mi_script_backend.sh\n$ ./mi_script_backend.sh', en: '$ chmod +x my_backend_script.sh\n$ ./my_backend_script.sh' },
  'proc.title': { es: 'Procesos', en: 'Processes' },
  'proc.tree.hint': { es: 'CPU/RAM se actualizan cada 3s (simulación)', en: 'CPU/RAM update every 3s (simulation)' },
  'proc.kill': { es: 'kill -9', en: 'kill -9' },
  'proc.kill.note': { es: 'No puedes matar a systemd (PID 1).', en: 'You cannot kill systemd (PID 1).' },
  'proc.info.pid': { es: 'PID', en: 'PID' },
  'proc.info.state': { es: 'Estado', en: 'State' },
  'proc.info.cpu': { es: 'CPU', en: 'CPU' },
  'proc.info.mem': { es: 'Memoria', en: 'Memory' },
  'proc.status.running': { es: 'running', en: 'running' },
  'proc.status.sleeping': { es: 'sleeping', en: 'sleeping' },
  'proc.status.zombie': { es: 'zombie', en: 'zombie' },
  'proc.empty': { es: 'No hay procesos. Kill exitoso ✓', en: 'No processes. Successful kill ✓' },
}