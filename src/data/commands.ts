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
        cuandoUsarlo: 'Confirmar dónde estás antes de mover o borrar algo'
      },
      {
        numero: 2,
        comando: 'cd -',
        queHace: 'Vuelve al directorio anterior',
        cuandoUsarlo: 'Alternar entre config y proyecto sin escribir rutas'
      },
      {
        numero: 3,
        comando: 'ls -lh',
        queHace: 'Lista archivos con tamaño legible',
        cuandoUsarlo: 'Inspeccionar tamaños de logs o builds'
      },
      {
        numero: 4,
        comando: 'mkdir -p app/src/api',
        queHace: 'Crea carpetas anidadas de una vez',
        cuandoUsarlo: 'Estructurar un proyecto nuevo rápido'
      },
      {
        numero: 5,
        comando: 'tree -L 2',
        queHace: 'Muestra el árbol de directorios',
        cuandoUsarlo: 'Ver la estructura de un proyecto sin abrir un explorador'
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
        cuandoUsarlo: 'cat para archivos cortos, less para largos'
      },
      {
        numero: 7,
        comando: 'head -n 20 / tail -n 20',
        queHace: 'Primeras / últimas líneas de un archivo',
        cuandoUsarlo: 'Ver el inicio de un CSV o lo último de un log'
      },
      {
        numero: 8,
        comando: 'nano / vim',
        queHace: 'Editores de texto en terminal',
        cuandoUsarlo: 'Editar configs sin salir del servidor'
      },
      {
        numero: 9,
        comando: 'grep -rnI "texto" .',
        queHace: 'Busca texto recursivamente ignorando binarios',
        cuandoUsarlo: 'Encontrar una variable o credencial en el código'
      },
      {
        numero: 10,
        comando: 'wc -l',
        queHace: 'Cuenta líneas',
        cuandoUsarlo: 'Saber cuántas peticiones o errores hay en un log'
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
        cuandoUsarlo: 'Probar que tu API responde localmente'
      },
      {
        numero: 12,
        comando: 'ping -c 4 dominio',
        queHace: 'Comprueba conectividad y DNS',
        cuandoUsarlo: 'Verificar que el servidor responde en red'
      },
      {
        numero: 13,
        comando: 'ss -tulnp',
        queHace: 'Puertos en escucha y su proceso',
        cuandoUsarlo: 'Ver qué servicio ocupa qué puerto'
      },
      {
        numero: 14,
        comando: 'lsof -i :3000',
        queHace: 'Proceso que ocupa un puerto específico',
        cuandoUsarlo: 'Liberar un puerto ocupado (EADDRINUSE)'
      },
      {
        numero: 15,
        comando: 'dig dominio',
        queHace: 'Consulta registros DNS',
        cuandoUsarlo: 'Confirmar propagación de un subdominio'
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
        cuandoUsarlo: 'Confirmar que tu app sigue corriendo'
      },
      {
        numero: 17,
        comando: 'top / htop',
        queHace: 'Monitoreo de CPU/RAM en vivo',
        cuandoUsarlo: 'Diagnosticar un servidor lento'
      },
      {
        numero: 18,
        comando: 'kill -9 PID',
        queHace: 'Fuerza el cierre de un proceso (SIGKILL)',
        cuandoUsarlo: 'Un proceso colgado que no responde a SIGTERM'
      },
      {
        numero: 19,
        comando: 'systemctl status servicio',
        queHace: 'Estado de un servicio del sistema',
        cuandoUsarlo: 'Saber si Nginx/una API está activa'
      },
      {
        numero: 20,
        comando: 'journalctl -u servicio -n 50 --no-pager',
        queHace: 'Logs de systemd de un servicio',
        cuandoUsarlo: 'Revisar por qué un servicio falló al iniciar'
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
        cuandoUsarlo: 'Ver peticiones entrando en vivo'
      },
      {
        numero: 22,
        comando: 'df -h',
        queHace: 'Espacio en disco disponible',
        cuandoUsarlo: 'Diagnosticar un servidor que se cae por disco lleno'
      },
      {
        numero: 23,
        comando: 'du -sh /ruta/*',
        queHace: 'Peso de cada carpeta',
        cuandoUsarlo: 'Encontrar qué llenó el disco'
      },
      {
        numero: 24,
        comando: 'history | grep palabra',
        queHace: 'Busca en comandos anteriores',
        cuandoUsarlo: 'Recuperar un comando largo ya usado'
      },
      {
        numero: 25,
        comando: 'comando 2> /dev/null',
        queHace: 'Silencia errores (stderr)',
        cuandoUsarlo: 'Limpiar salida ruidosa de un comando'
      }
    ]
  }
]
