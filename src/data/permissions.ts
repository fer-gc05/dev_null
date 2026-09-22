import type { PermissionItem } from './types'

export const fsData: PermissionItem[] = [
  {
    title: '/ (Directorio Raíz)',
    desc: "Es el nivel más alto del sistema de archivos. Todo en Linux cuelga de aquí. No es lo mismo que el usuario 'root'.",
    dev: "Nunca ejecutes 'rm -rf /' o borrarás el sistema operativo entero."
  },
  {
    title: '/bin & /sbin',
    desc: 'Contienen los Binarios (comandos ejecutables). Aquí viven los comandos que usas a diario como "ls", "cp", o "mkdir".',
    dev: 'Cuando instalas herramientas como PHP o Composer, sus ejecutables suelen enlazarse aquí para que puedas llamarlos desde cualquier lado.'
  },
  {
    title: '/etc',
    desc: 'El centro de configuración del sistema. (Piensa en él como un archivo .env gigante para todo el sistema operativo).',
    dev: 'Aquí configurarás los archivos de tus servidores como Nginx (/etc/nginx) o las variables globales de PHP (/etc/php/php.ini).'
  },
  {
    title: '/home',
    desc: 'Los directorios personales de los usuarios. Cada usuario regular tiene su propia carpeta aquí.',
    dev: 'Tus proyectos personales, tus claves SSH (.ssh) y tus configuraciones de terminal (.zshrc) viven en /home/tu_usuario/.'
  },
  {
    title: '/var',
    desc: 'Datos Variables. Archivos que crecen y cambian constantemente con el tiempo.',
    dev: 'Fundamental para backend. Aquí se guardan los logs del sistema (/var/log) y, a menudo, los archivos públicos de tu servidor web (/var/www/html).'
  },
  {
    title: '/dev',
    desc: "Archivos de Dispositivos (Devices). En Linux, 'todo es un archivo', incluso un disco duro o un micrófono.",
    dev: '¡Aquí vive el famoso /dev/null! El agujero negro donde enviamos la basura y la salida de errores que no queremos leer.'
  }
]

export const pmData: PermissionItem[] = [
  {
    title: 'Usuarios: Root vs Regular',
    desc: 'Root (UID 0) es el superusuario que puede hacer todo. Los usuarios regulares tienen restricciones por seguridad.',
    code: '$ sudo su \n# ¡Ahora eres Dios en el sistema!'
  },
  {
    title: 'rwx (Lectura, Escritura, Ejecución)',
    desc: "Los 3 permisos básicos. \n'r' (Read): Leer el archivo.\n'w' (Write): Modificarlo.\n'x' (Execute): Correrlo como un programa/script.",
    code: '-rwxr--r-- 1 dev_null usuarios 1024 script.php'
  },
  {
    title: 'Grupos de Permisos (UGO)',
    desc: 'Los permisos se dividen en 3 bloques de caracteres: \n1. Owner (Dueño del archivo)\n2. Group (Grupo al que pertenece)\n3. Others (Cualquier otro usuario)',
    code: '$ ls -la\n-rwxr-xr-- (Dueño: rwx | Grupo: r-x | Otros: r--)'
  },
  {
    title: 'Comando: chmod +x',
    desc: "Cambia los modos (Change Mode). Al usar '+x' le estás diciendo al sistema: 'Convierte este archivo de texto en un script ejecutable'.",
    code: '$ chmod +x mi_script_backend.sh\n$ ./mi_script_backend.sh'
  }
]
