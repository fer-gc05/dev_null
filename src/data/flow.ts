import type { FlowItem } from './types'

export const flowData: FlowItem[] = [
  {
    title: { es: 'Salida Estándar (stdout - Canal 1)', en: 'Standard Output (stdout - Channel 1)' },
    color: 'green',
    desc: {
      es: "Es el flujo normal de datos. Cuando un comando se ejecuta con éxito, escupe los resultados aquí. Por defecto, se imprime en tu pantalla, pero puedes redirigirlo a un archivo usando '>'.",
      en: "This is the normal data flow. When a command succeeds, it spits results here. By default it prints to your screen, but you can redirect it to a file using '>'."
    },
    code: "echo 'Hola Mundo' > saludo.txt",
    output: {
      es: '# Crea un archivo llamado saludo.txt con el texto adentro.',
      en: '# Creates a file named saludo.txt with the text inside.'
    }
  },
  {
    title: { es: 'Salida de Error (stderr - Canal 2)', en: 'Standard Error (stderr - Channel 2)' },
    color: 'red',
    desc: {
      es: 'Es un canal separado exclusivamente para errores. Si tu código PHP o comando falla, el error viaja por aquí. Se separa del éxito para que los errores no corrompan tus archivos de datos.',
      en: 'It is a separate channel exclusively for errors. If your PHP code or command fails, the error travels here. It is separated from success so errors do not corrupt your data files.'
    },
    code: 'ls /carpeta_falsa 2> errores.log',
    output: {
      es: "# Guarda el error 'No such file or directory' en el log, en vez de mostrarlo en pantalla.",
      en: "# Saves the 'No such file or directory' error to the log instead of showing it on screen."
    }
  },
  {
    title: { es: 'Tuberías (Pipes | )', en: 'Pipes (Pipes | )' },
    color: 'yellow',
    desc: {
      es: "El superpoder de Linux. Toma la 'Salida Estándar' del Comando A y la conecta directamente como 'Entrada' del Comando B. Permite encadenar programas pequeños para resolver problemas complejos.",
      en: "Linux's superpower. Takes the 'Standard Output' of Command A and connects it directly as 'Input' to Command B. Allows chaining small programs to solve complex problems."
    },
    code: "cat access.log | grep '404' | wc -l",
    output: {
      es: '# Lee el log -> Filtra solo los errores 404 -> Cuenta cuántas líneas son.',
      en: '# Reads the log -> Filters only 404 errors -> Counts how many lines there are.'
    }
  },
  {
    title: { es: 'El Agujero Negro (> /dev/null)', en: 'The Black Hole (> /dev/null)' },
    color: 'green',
    desc: {
      es: 'El homónimo de nuestro canal. Es un archivo especial que descarta todo lo que se le envía. Si tienes un script corriendo de fondo (cronjob) y no quieres que llene tu disco duro con logs inútiles, lo mandas aquí.',
      en: 'The namesake of our channel. It is a special file that discards everything sent to it. If you have a background script (cronjob) and do not want it filling your hard drive with useless logs, send it here.'
    },
    code: './script_pesado.sh > /dev/null 2>&1',
    output: {
      es: '# Ejecuta el script. Manda el éxito (1) a /dev/null y redirige los errores (2) al mismo agujero negro.',
      en: '# Runs the script. Sends success (1) to /dev/null and redirects errors (2) into the same black hole.'
    }
  }
]
