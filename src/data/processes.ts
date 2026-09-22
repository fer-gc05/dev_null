import type { ProcessItem } from './types'

export const processesData: ProcessItem[] = [
  {
    title: { es: '1. El PID (Process ID)', en: '1. PID (Process ID)' },
    desc: { es: 'Cada vez que ejecutas un programa, Linux le asigna un número de identificación único llamado PID. Es como la cédula de identidad del proceso mientras está vivo.', en: 'Every time you run a program, Linux assigns it a unique identification number called PID. It is like the ID card of the process while it is alive.' },
    codeLines: [
      '$ ps aux | grep php',
      '# Muestra todos los procesos de PHP y sus respectivos PID (ej. 10452)'
    ]
  },
  {
    title: { es: '2. Demonios (Daemons)', en: '2. Daemons' },
    desc: { es: 'Son programas que corren en segundo plano sin que te des cuenta. No tienen interfaz gráfica. Tu servidor Nginx, MySQL o tus workers de Laravel (Redis) corren como demonios.', en: 'Programs that run in the background without you noticing. They have no graphical interface. Your Nginx, MySQL, or Laravel (Redis) workers run as daemons.' },
    codeLines: [
      '$ systemctl status nginx',
      "# Verifica si el demonio del servidor web está 'active (running)'"
    ]
  },
  {
    title: { es: '3. Monitoreo (htop)', en: '3. Monitoring (htop)' },
    desc: { es: 'El administrador de tareas de la terminal. Te muestra en tiempo real qué proceso está consumiendo toda la RAM o quemando el CPU. Fundamental para detectar cuellos de botella en el código.', en: 'The terminal task manager. Shows in real-time which process is consuming all RAM or burning CPU. Essential for detecting bottlenecks in code.' },
    codeLines: ['$ htop', '# Abre la interfaz interactiva de monitoreo']
  },
  {
    title: { es: '4. La guillotina (kill -9)', en: '4. The Guillotine (kill -9)' },
    desc: { es: "Cuando un script entra en un bucle infinito y no responde, usas el comando kill junto con su PID. El '-9' (SIGKILL) le dice al Kernel que lo asesine inmediatamente, sin piedad.", en: "When a script enters an infinite loop and doesn't respond, you use kill with its PID. The '-9' (SIGKILL) tells the Kernel to terminate it immediately, no mercy." },
    codeLines: ['$ kill -9 10452', '# Destruye instantáneamente el proceso con PID 10452']
  }
]