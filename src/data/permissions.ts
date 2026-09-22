import type { PermissionItem } from './types'

export const fsData: PermissionItem[] = [
  {
    title: { es: '/ (Directorio Raíz)', en: '/ (Root Directory)' },
    desc: { es: "Es el nivel más alto del sistema de archivos. Todo en Linux cuelga de aquí. No es lo mismo que el usuario 'root'.", en: "The top level of the filesystem. Everything in Linux hangs from here. Not the same as the root user." },
    dev: { es: "Nunca ejecutes 'rm -rf /' o borrarás el sistema operativo entero.", en: "Never run 'rm -rf /' or you'll wipe the entire OS." }
  },
  {
    title: { es: '/bin & /sbin', en: '/bin & /sbin' },
    desc: { es: 'Contienen los Binarios (comandos ejecutables). Aquí viven los comandos que usas a diario como "ls", "cp", o "mkdir".', en: 'Contains Binaries (executable commands). This is where daily commands like ls, cp, or mkdir live.' },
    dev: { es: 'Cuando instalas herramientas como PHP o Composer, sus ejecutables suelen enlazarse aquí para que puedas llamarlos desde cualquier lado.', en: 'When you install tools like PHP or Composer, their executables are often linked here so you can call them from anywhere.' }
  },
  {
    title: { es: '/etc', en: '/etc' },
    desc: { es: 'El centro de configuración del sistema. (Piensa en él como un archivo .env gigante para todo el sistema operativo).', en: 'The system configuration center. (Think of it as a giant .env file for the whole OS).' },
    dev: { es: 'Aquí configurarás los archivos de tus servidores como Nginx (/etc/nginx) o las variables globales de PHP (/etc/php/php.ini).', en: 'Here you configure your server files like Nginx (/etc/nginx) or PHP globals (/etc/php/php.ini).' }
  },
  {
    title: { es: '/home', en: '/home' },
    desc: { es: 'Los directorios personales de los usuarios. Cada usuario regular tiene su propia carpeta aquí.', en: 'Personal directories of users. Each regular user has their own folder here.' },
    dev: { es: 'Tus proyectos personales, tus claves SSH (.ssh) y tus configuraciones de terminal (.zshrc) viven en /home/tu_usuario/.', en: 'Your personal projects, SSH keys (.ssh), and terminal configs (.zshrc) live in /home/your_user/.' }
  },
  {
    title: { es: '/var', en: '/var' },
    desc: { es: 'Datos Variables. Archivos que crecen y cambian constantemente con el tiempo.', en: 'Variable Data. Files that grow and change constantly over time.' },
    dev: { es: 'Fundamental para backend. Aquí se guardan los logs del sistema (/var/log) y, a menudo, los archivos públicos de tu servidor web (/var/www/html).', en: 'Critical for backend. System logs (/var/log) and often your web server public files (/var/www/html) are stored here.' }
  },
  {
    title: { es: '/dev', en: '/dev' },
    desc: { es: "Archivos de Dispositivos (Devices). En Linux, 'todo es un archivo', incluso un disco duro o un micrófono.", en: "Device Files. In Linux, everything is a file, even a hard drive or microphone." },
    dev: { es: '¡Aquí vive el famoso /dev/null! El agujero negro donde enviamos la basura y la salida de errores que no queremos leer.', en: 'This is where the famous /dev/null lives! The black hole where we send garbage and error output we dont want to read.' }
  }
]

export const pmData: PermissionItem[] = [
  {
    title: { es: 'Usuarios: Root vs Regular', en: 'Users: Root vs Regular' },
    desc: { es: 'Root (UID 0) es el superusuario que puede hacer todo. Los usuarios regulares tienen restricciones por seguridad.', en: 'Root (UID 0) is the superuser who can do anything. Regular users have restrictions for security.' },
    code: { es: '$ sudo su \n# ¡Ahora eres Dios en el sistema!', en: '$ sudo su\n# You are now God in the system!' }
  },
  {
    title: { es: 'rwx (Lectura, Escritura, Ejecución)', en: 'rwx (Read, Write, Execute)' },
    desc: { es: "Los 3 permisos básicos. \n'r' (Read): Leer el archivo.\n'w' (Write): Modificarlo.\n'x' (Execute): Correrlo como un programa/script.", en: "The 3 basic permissions.\nr (Read): Read the file.\nw (Write): Modify it.\nx (Execute): Run it as a program/script." },
    code: { es: '-rwxr--r-- 1 dev_null usuarios 1024 script.php', en: '-rwxr--r-- 1 dev_null users 1024 script.php' }
  },
  {
    title: { es: 'Grupos de Permisos (UGO)', en: 'Permission Groups (UGO)' },
    desc: { es: 'Los permisos se dividen en 3 bloques de caracteres: \n1. Owner (Dueño del archivo)\n2. Group (Grupo al que pertenece)\n3. Others (Cualquier otro usuario)', en: 'Permissions are divided into 3 character blocks:\n1. Owner (File owner)\n2. Group (Group it belongs to)\n3. Others (Any other user)' },
    code: { es: '$ ls -la\n-rwxr-xr-- (Dueño: rwx | Grupo: r-x | Otros: r--)', en: '$ ls -la\n-rwxr-xr-- (Owner: rwx | Group: r-x | Others: r--)' }
  },
  {
    title: { es: 'Comando: chmod +x', en: 'Command: chmod +x' },
    desc: { es: "Cambia los modos (Change Mode). Al usar '+x' le estás diciendo al sistema: 'Convierte este archivo de texto en un script ejecutable'.", en: "Changes modes (Change Mode). Using '+x' tells the system: 'Turn this text file into an executable script'." },
    code: { es: '$ chmod +x mi_script_backend.sh\n$ ./mi_script_backend.sh', en: '$ chmod +x my_backend_script.sh\n$ ./my_backend_script.sh' }
  }
]