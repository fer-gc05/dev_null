import type { CommandBlock } from './types'

export const commandsData: CommandBlock[] = [
  {
    bloque: 'Navegación',
    color: 'green',
    comandos: [
      {
        numero: 1,
        comando: 'pwd',
        queHace: 'Imprime la ruta absoluta actual',
        cuandoUsarlo: 'Confirmar dónde estás antes de mover o borrar algo',
        output: ['/home/user/proyecto']
      },
      {
        numero: 2,
        comando: 'cd -',
        queHace: 'Vuelve al directorio anterior',
        cuandoUsarlo: 'Alternar entre config y proyecto sin escribir rutas',
        output: ['/home/user/proyecto', '/home/user']
      },
      {
        numero: 3,
        comando: 'ls -lh',
        queHace: 'Lista archivos con tamaño legible',
        cuandoUsarlo: 'Inspeccionar tamaños de logs o builds',
        output: [
          'total 48K',
          'drwxr-xr-x 2 user user 4.0K ene 15 10:00 src',
          'drwxr-xr-x 3 user user 4.0K ene 14 09:30 tests',
          '-rw-r--r-- 1 user user 1.2K ene 15 08:45 package.json',
          '-rw-r--r-- 1 user user  540 ene 14 12:00 README.md',
          '-rw-r--r-- 1 user user  2.1K ene 13 16:20 tsconfig.json'
        ]
      },
      {
        numero: 4,
        comando: 'mkdir -p app/src/api',
        queHace: 'Crea carpetas anidadas de una vez',
        cuandoUsarlo: 'Estructurar un proyecto nuevo rápido',
        output: []
      },
      {
        numero: 5,
        comando: 'tree -L 2',
        queHace: 'Muestra el árbol de directorios',
        cuandoUsarlo: 'Ver la estructura de un proyecto sin abrir un explorador',
        output: [
          '.',
          '├── src',
          '│   ├── components',
          '│   ├── composables',
          '│   ├── data',
          '│   ├── utils',
          '│   └── views',
          '├── tests',
          '├── package.json',
          '├── README.md',
          '└── tsconfig.json',
          '',
          '3 directories, 7 files'
        ]
      }
    ]
  },
  {
    bloque: 'Archivos',
    color: 'blue',
    comandos: [
      {
        numero: 6,
        comando: 'cat / less',
        queHace: 'Muestra un archivo completo / paginado',
        cuandoUsarlo: 'cat para archivos cortos, less para largos',
        output: [
          '# package.json',
          '{',
          '  "name": "mi-proyecto",',
          '  "version": "1.0.0",',
          '  "scripts": {',
          '    "dev": "vite",',
          '    "build": "vue-tsc && vite build"',
          '  }',
          '}'
        ]
      },
      {
        numero: 7,
        comando: 'head -n 20 / tail -n 20',
        queHace: 'Primeras / últimas líneas de un archivo',
        cuandoUsarlo: 'Ver el inicio de un CSV o lo último de un log',
        output: [
          '==> head -n 3 access.log <==',
          '192.168.1.1 - - [15/Jan/2025:10:30:45 +0000] "GET /api/users HTTP/1.1" 200 1234',
          '192.168.1.2 - - [15/Jan/2025:10:30:46 +0000] "POST /api/auth HTTP/1.1" 201 567',
          '192.168.1.3 - - [15/Jan/2025:10:30:47 +0000] "GET /api/posts HTTP/1.1" 200 890',
          '',
          '==> tail -n 3 access.log <==',
          '192.168.1.50 - - [15/Jan/2025:11:45:22 +0000] "GET /health HTTP/1.1" 200 23',
          '192.168.1.51 - - [15/Jan/2025:11:45:23 +0000] "GET /api/data HTTP/1.1" 200 445',
          '192.168.1.52 - - [15/Jan/2025:11:45:24 +0000] "POST /api/webhook HTTP/1.1" 200 102'
        ]
      },
      {
        numero: 8,
        comando: 'nano / vim',
        queHace: 'Editores de texto en terminal',
        cuandoUsarlo: 'Editar configs sin salir del servidor',
        output: [
          '[ Abierto en nano - GNU nano 7.2 ]',
          '',
          'server {',
          '    listen 80;',
          '    server_name example.com;',
          '    root /var/www/html;',
          '    index index.html;',
          '}',
          '',
          '[ 3 líneas ]'
        ]
      },
      {
        numero: 9,
        comando: 'grep -rnI "texto" .',
        queHace: 'Busca texto recursivamente ignorando binarios',
        cuandoUsarlo: 'Encontrar una variable o credencial en el código',
        output: [
          'src/config/api.ts:12:const API_KEY = "texto-secreto-123"',
          'src/utils/helpers.ts:45:console.log("texto de depuración")',
          'tests/integration.test.ts:8:expect(result).toContain("texto")'
        ]
      },
      {
        numero: 10,
        comando: 'wc -l',
        queHace: 'Cuenta líneas',
        cuandoUsarlo: 'Saber cuántas peticiones o errores hay en un log',
        output: [
          '1247 access.log',
          '  234 error.log',
          '  89  debug.log'
        ]
      }
    ]
  },
  {
    bloque: 'Red y HTTP',
    color: 'yellow',
    comandos: [
      {
        numero: 11,
        comando: 'curl -i http://127.0.0.1:3000',
        queHace: 'Petición HTTP con headers',
        cuandoUsarlo: 'Probar que tu API responde localmente',
        output: [
          'HTTP/1.1 200 OK',
          'Content-Type: application/json',
          'Content-Length: 87',
          'Date: Wed, 15 Jan 2025 11:30:00 GMT',
          '',
          '{"status":"ok","version":"1.2.3","uptime":86400}'
        ]
      },
      {
        numero: 12,
        comando: 'ping -c 4 dominio',
        queHace: 'Comprueba conectividad y DNS',
        cuandoUsarlo: 'Verificar que el servidor responde en red',
        output: [
          'PING dominio.com (93.184.216.34) 56(84) bytes of data.',
          '64 bytes from 93.184.216.34: icmp_seq=1 ttl=56 time=12.3 ms',
          '64 bytes from 93.184.216.34: icmp_seq=2 ttl=56 time=11.8 ms',
          '64 bytes from 93.184.216.34: icmp_seq=3 ttl=56 time=12.1 ms',
          '64 bytes from 93.184.216.34: icmp_seq=4 ttl=56 time=11.9 ms',
          '',
          '--- dominio.com ping statistics ---',
          '4 packets transmitted, 4 received, 0% packet loss, time 3004ms',
          'rtt min/avg/max/mdev = 11.8/12.0/12.3/0.2 ms'
        ]
      },
      {
        numero: 13,
        comando: 'ss -tulnp',
        queHace: 'Puertos en escucha y su proceso',
        cuandoUsarlo: 'Ver qué servicio ocupa qué puerto',
        output: [
          'Netid  State  Recv-Q Send-Q Local Address:Port  Peer Address:Port  Process',
          'tcp    LISTEN 0      128    0.0.0.0:22         0.0.0.0:*          users:(("sshd",pid=1234,fd=3))',
          'tcp    LISTEN 0      511    0.0.0.0:80         0.0.0.0:*          users:(("nginx",pid=567,fd=6))',
          'tcp    LISTEN 0      511    0.0.0.0:443        0.0.0.0:*          users:(("nginx",pid=567,fd=7))',
          'tcp    LISTEN 0      128    127.0.0.1:3000     0.0.0.0:*          users:(("node",pid=8901,fd=18))',
          'tcp    LISTEN 0      128    127.0.0.1:5432     0.0.0.0:*          users:(("postgres",pid=432,fd=8))',
          'udp    UNCONN 0      0      0.0.0.0:53         0.0.0.0:*          users:(("systemd-resolve",pid=789,fd=12))'
        ]
      },
      {
        numero: 14,
        comando: 'lsof -i :3000',
        queHace: 'Proceso que ocupa un puerto específico',
        cuandoUsarlo: 'Liberar un puerto ocupado (EADDRINUSE)',
        output: [
          'COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME',
          'node    8901 user   18u  IPv4  45678      0t0  TCP 127.0.0.1:3000 (LISTEN)'
        ]
      },
      {
        numero: 15,
        comando: 'dig dominio',
        queHace: 'Consulta registros DNS',
        cuandoUsarlo: 'Confirmar propagación de un subdominio',
        output: [
          '; <<>> DiG 9.18.12 <<>> dominio.com',
          ';; global options: +cmd',
          ';; Got answer:',
          ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345',
          ';; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1',
          '',
          ';; QUESTION SECTION:',
          ';dominio.com.           IN  A',
          '',
          ';; ANSWER SECTION:',
          'dominio.com.      300  IN  A  93.184.216.34',
          '',
          ';; Query time: 12 msec',
          ';; SERVER: 1.1.1.1#53(1.1.1.1)',
          ';; WHEN: Wed Jan 15 11:30:00 UTC 2025',
          ';; MSG SIZE  rcvd: 65'
        ]
      }
    ]
  },
  {
    bloque: 'Procesos y Recursos',
    color: 'purple',
    comandos: [
      {
        numero: 16,
        comando: 'ps aux | grep proceso',
        queHace: 'Filtra procesos activos',
        cuandoUsarlo: 'Confirmar que tu app sigue corriendo',
        output: [
          'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND',
          'user      8901  2.1  1.2 456789 98765 ?        Sl   10:00   0:15 node server.js',
          'user      8912  0.5  0.3 123456 23456 ?        Sl   10:01   0:03 node worker.js',
          'root       567  0.0  0.1  98765  4321 ?        Ss   09:00   0:00 nginx: master',
          'www-data   568  0.0  0.2  98765  8765 ?        S    09:00   0:00 nginx: worker'
        ]
      },
      {
        numero: 17,
        comando: 'top / htop',
        queHace: 'Monitoreo de CPU/RAM en vivo',
        cuandoUsarlo: 'Diagnosticar un servidor lento',
        output: [
          'top - 11:30:45 up 2 days,  3:45,  1 user,  load average: 0.52, 0.48, 0.45',
          'Tasks: 187 total,   2 running, 185 sleeping,   0 stopped,   0 zombie',
          '%Cpu(s): 12.3 us,  3.1 sy,  0.0 ni, 84.6 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st',
          'MiB Mem :  15952.0 total,   4521.0 free,   7832.0 used,   3599.0 buff/cache',
          'MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   7624.0 avail Mem',
          '',
          '    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND',
          '   8901 user      20   0  456789  98765  12345 S   2.1   0.6   0:15.23 node',
          '   567 root      20   0   98765   4321   2345 S   0.0   0.0   0:00.12 nginx'
        ]
      },
      {
        numero: 18,
        comando: 'kill -9 PID',
        queHace: 'Fuerza el cierre de un proceso (SIGKILL)',
        cuandoUsarlo: 'Un proceso colgado que no responde a SIGTERM',
        output: []
      },
      {
        numero: 19,
        comando: 'systemctl status servicio',
        queHace: 'Estado de un servicio del sistema',
        cuandoUsarlo: 'Saber si Nginx/una API está activa',
        output: [
          '● nginx.service - A high performance web server and a reverse proxy server',
          '     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)',
          '     Active: active (running) since Mon 2025-01-13 09:00:00 UTC; 2 days ago',
          '       Docs: man:nginx(8)',
          '   Main PID: 567 (nginx)',
          '      Tasks: 5 (limit: 4681)',
          '     Memory: 12.4M',
          '     CGroup: /system.slice/nginx.service',
          '             ├─567 nginx: master process /usr/sbin/nginx -g "daemon off;"',
          '             ├─568 nginx: worker process',
          '             ├─569 nginx: worker process',
          '             └─570 nginx: worker process',
          '',
          'ene 15 11:30:00 server nginx[568]: 192.168.1.1 - - [15/Jan/2025:11:30:00 +0000] "GET / HTTP/1.1" 200'
        ]
      },
      {
        numero: 20,
        comando: 'journalctl -u servicio -n 50 --no-pager',
        queHace: 'Logs de systemd de un servicio',
        cuandoUsarlo: 'Revisar por qué un servicio falló al iniciar',
        output: [
          'ene 15 10:00:00 server systemd[1]: Started A high performance web server.',
          'ene 15 10:00:01 server nginx[567]: nginx: [warn] "ssl_stapling" ignored, no certificate',
          'ene 15 10:00:01 server nginx[567]: nginx: configuration file /etc/nginx/nginx.conf test is successful',
          'ene 15 10:00:01 server nginx[568]: 192.168.1.1 - - [15/Jan/2025:10:00:01 +0000] "GET /health HTTP/1.1" 200 23',
          'ene 15 10:00:02 server nginx[568]: 192.168.1.2 - - [15/Jan/2025:10:00:02 +0000] "POST /api/auth HTTP/1.1" 201 567',
          'ene 15 10:00:03 server nginx[568]: 192.168.1.3 - - [15/Jan/2025:10:00:03 +0000] "GET /api/users HTTP/1.1" 200 1234'
        ]
      }
    ]
  },
  {
    bloque: 'Logs y cierre',
    color: 'red',
    comandos: [
      {
        numero: 21,
        comando: 'tail -f archivo.log',
        queHace: 'Sigue un log en tiempo real',
        cuandoUsarlo: 'Ver peticiones entrando en vivo',
        output: [
          '192.168.1.1 - - [15/Jan/2025:11:30:01 +0000] "GET /api/users HTTP/1.1" 200 1234',
          '192.168.1.2 - - [15/Jan/2025:11:30:02 +0000] "POST /api/auth HTTP/1.1" 201 567',
          '192.168.1.3 - - [15/Jan/2025:11:30:03 +0000] "GET /api/posts HTTP/1.1" 200 890',
          '192.168.1.4 - - [15/Jan/2025:11:30:04 +0000] "PUT /api/users/42 HTTP/1.1" 200 445',
          '192.168.1.5 - - [15/Jan/2025:11:30:05 +0000] "DELETE /api/sessions HTTP/1.1" 204 0',
          '... (presiona Ctrl+C para salir)'
        ]
      },
      {
        numero: 22,
        comando: 'df -h',
        queHace: 'Espacio en disco disponible',
        cuandoUsarlo: 'Diagnosticar un servidor que se cae por disco lleno',
        output: [
          'Filesystem      Size  Used Avail Use% Mounted on',
          '/dev/sda1       100G   45G   50G  48% /',
          'tmpfs           7.9G     0  7.9G   0% /dev/shm',
          '/dev/sda2       500G  200G  280G  42% /home',
          '/dev/sdb1       1.0T  850G  120G  88% /var/lib/docker'
        ]
      },
      {
        numero: 23,
        comando: 'du -sh /ruta/*',
        queHace: 'Peso de cada carpeta',
        cuandoUsarlo: 'Encontrar qué llenó el disco',
        output: [
          '2.1G    /var/log',
          '850G    /var/lib/docker',
          '45M     /var/cache',
          '12K     /var/tmp',
          '3.2G    /home/user/proyecto',
          '1.1G    /home/user/.npm'
        ]
      },
      {
        numero: 24,
        comando: 'history | grep palabra',
        queHace: 'Busca en comandos anteriores',
        cuandoUsarlo: 'Recuperar un comando largo ya usado',
        output: [
          '  142  git log --oneline --grep="palabra"',
          '  187  grep -rn "palabra" src/',
          '  203  history | grep palabra',
          '  211  docker logs -f contenedor | grep palabra'
        ]
      },
      {
        numero: 25,
        comando: 'comando 2> /dev/null',
        queHace: 'Silencia errores (stderr)',
        cuandoUsarlo: 'Limpiar salida ruidosa de un comando',
        output: [
          'salida normal del comando',
          'otra línea de stdout',
          '(stderr silenciado redirigido a /dev/null)'
        ]
      }
    ]
  }
]
