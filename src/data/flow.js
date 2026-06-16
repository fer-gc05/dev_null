export const flowData = [
  {
    title: 'Salida Estándar (stdout - Canal 1)',
    color: 'green',
    desc: "Es el flujo normal de datos. Cuando un comando se ejecuta con éxito, escupe los resultados aquí. Por defecto, se imprime en tu pantalla, pero puedes redirigirlo a un archivo usando '>'.",
    code: "echo 'Hola Mundo' > saludo.txt",
    output: '# Crea un archivo llamado saludo.txt con el texto adentro.'
  },
  {
    title: 'Salida de Error (stderr - Canal 2)',
    color: 'red',
    desc: 'Es un canal separado exclusivo para errores. Si tu código PHP o comando falla, el error viaja por aquí. Se separa del éxito para que los errores no corrompan tus archivos de datos.',
    code: 'ls /carpeta_falsa 2> errores.log',
    output:
      "# Guarda el error 'No such file or directory' en el log, en vez de mostrarlo en pantalla."
  },
  {
    title: 'Tuberías (Pipes | )',
    color: 'yellow',
    desc: "El superpoder de Linux. Toma la 'Salida Estándar' del Comando A y la conecta directamente como 'Entrada' del Comando B. Permite encadenar programas pequeños para resolver problemas complejos.",
    code: "cat access.log | grep '404' | wc -l",
    output: '# Lee el log -> Filtra solo los errores 404 -> Cuenta cuántas líneas son.'
  },
  {
    title: 'El Agujero Negro (> /dev/null)',
    color: 'green',
    desc: 'El homónimo de nuestro canal. Es un archivo especial que descarta todo lo que se le envía. Si tienes un script corriendo de fondo (cronjob) y no quieres que llene tu disco duro con logs inútiles, lo mandas aquí.',
    code: './script_pesado.sh > /dev/null 2>&1',
    output:
      '# Ejecuta el script. Manda el éxito (1) a /dev/null y redirige los errores (2) al mismo agujero negro.'
  }
]
