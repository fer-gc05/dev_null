export const architectureData = [
  {
    title: '1. Hardware',
    analogy: 'La Cocina. Los componentes físicos y brutos donde ocurre el trabajo pesado.',
    examples: 'Procesador (CPU), Memoria RAM, Discos Duros / SSD, Tarjetas de Red.',
    function:
      'Proveer los recursos físicos fundamentales para ejecutar procesos y almacenar datos a nivel de transistores y pulsos eléctricos.'
  },
  {
    title: '2. Kernel',
    analogy:
      'El Chef Ejecutivo. Organiza todo, pero nadie habla con él directamente. Evita que la cocina se queme.',
    examples: 'Gestor de memoria, planificador de procesos (Scheduler), drivers de dispositivos.',
    function:
      'Es el núcleo de Linux. Gestiona de manera segura y eficiente la comunicación entre el hardware físico y los procesos de software.'
  },
  {
    title: '3. Shell',
    analogy:
      'El Mesero. Tú (el cliente) le das tu orden, y él se la traduce y entrega al Chef (Kernel).',
    examples: 'Bash, Zsh, Sh, Fish.',
    function:
      'Actúa como un intérprete de comandos. Recibe instrucciones del usuario mediante texto en la terminal y ejecuta las llamadas al sistema operativo correspondientes.'
  },
  {
    title: '4. Espacio de Usuario',
    analogy: 'Los Clientes. Los que ocupan las mesas y piden cosas a la cocina para funcionar.',
    examples: 'Nginx, scripts de PHP, Docker, Git, Navegadores Web.',
    function:
      'El entorno donde se ejecutan todas las aplicaciones normales. Tiene acceso restringido a la memoria y no puede manipular el hardware directamente por razones de seguridad.'
  }
]
