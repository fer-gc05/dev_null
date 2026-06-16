export const processesData = [
  {
    title: '1. El PID (Process ID)',
    desc: 'Cada vez que ejecutas un programa, Linux le asigna un número de identificación único llamado PID. Es como la cédula de identidad del proceso mientras está vivo.',
    code: "$ ps aux | grep php<br><span class='comment'># Muestra todos los procesos de PHP y sus respectivos PID (ej. 10452)</span>"
  },
  {
    title: '2. Demonios (Daemons)',
    desc: 'Son programas que corren en segundo plano sin que te des cuenta. No tienen interfaz gráfica. Tu servidor Nginx, MySQL o tus workers de Laravel (Redis) corren como demonios.',
    code: "$ systemctl status nginx<br><span class='comment'># Verifica si el demonio del servidor web está 'active (running)'</span>"
  },
  {
    title: '3. Monitoreo (htop)',
    desc: 'El administrador de tareas de la terminal. Te muestra en tiempo real qué proceso está consumiendo toda la RAM o quemando el CPU. Fundamental para detectar cuellos de botella en el código.',
    code: "$ htop<br><span class='comment'># Abre la interfaz interactiva de monitoreo</span>"
  },
  {
    title: '4. La guillotina (kill -9)',
    desc: "Cuando un script entra en un bucle infinito y no responde, usas el comando kill junto con su PID. El '-9' (SIGKILL) le dice al Kernel que lo asesine inmediatamente, sin piedad.",
    code: "$ kill -9 10452<br><span class='comment'># Destruye instantáneamente el proceso con PID 10452</span>"
  }
]
