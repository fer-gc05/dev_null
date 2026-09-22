import type { ArchitectureLayer } from './types'

export const architectureData: ArchitectureLayer[] = [
  {
    title: { es: '1. Hardware', en: '1. Hardware' },
    analogy: {
      es: 'La Cocina. Los componentes físicos y brutos donde ocurre el trabajo pesado.',
      en: 'The Kitchen. The raw physical components where the heavy lifting happens.'
    },
    examples: {
      es: 'Procesador (CPU), Memoria RAM, Discos Duros / SSD, Tarjetas de Red.',
      en: 'Processor (CPU), RAM Memory, Hard Drives / SSDs, Network Cards.'
    },
    function: {
      es: 'Proveer los recursos físicos fundamentales para ejecutar procesos y almacenar datos a nivel de transistores y pulsos eléctricos.',
      en: 'Provide the fundamental physical resources to run processes and store data at the transistor and electrical pulse level.'
    }
  },
  {
    title: { es: '2. Kernel', en: '2. Kernel' },
    analogy: {
      es: 'El Chef Ejecutivo. Organiza todo, pero nadie habla con él directamente. Evita que la cocina se queme.',
      en: 'The Executive Chef. Organizes everything, but nobody talks to them directly. Keeps the kitchen from burning down.'
    },
    examples: {
      es: 'Gestor de memoria, planificador de procesos (Scheduler), drivers de dispositivos.',
      en: 'Memory manager, process scheduler, device drivers.'
    },
    function: {
      es: 'Es el núcleo de Linux. Gestiona de manera segura y eficiente la comunicación entre el hardware físico y los procesos de software.',
      en: 'It is the core of Linux. Safely and efficiently manages communication between physical hardware and software processes.'
    }
  },
  {
    title: { es: '3. Shell', en: '3. Shell' },
    analogy: {
      es: 'El Mesero. Tú (el cliente) le das tu orden, y él se la traduce y entrega al Chef (Kernel).',
      en: 'The Waiter. You (the customer) give them your order, and they translate and deliver it to the Chef (Kernel).'
    },
    examples: { es: 'Bash, Zsh, Sh, Fish.', en: 'Bash, Zsh, Sh, Fish.' },
    function: {
      es: 'Actúa como un intérprete de comandos. Recibe instrucciones del usuario mediante texto en la terminal y ejecuta las llamadas al sistema operativo correspondientes.',
      en: 'Acts as a command interpreter. Receives user instructions as text in the terminal and executes the corresponding operating system calls.'
    }
  },
  {
    title: { es: '4. Espacio de Usuario', en: '4. User Space' },
    analogy: {
      es: 'Los Clientes. Los que ocupan las mesas y piden cosas a la cocina para funcionar.',
      en: 'The Customers. Those occupying tables and asking the kitchen for things in order to work.'
    },
    examples: {
      es: 'Nginx, scripts de PHP, Docker, Git, Navegadores Web.',
      en: 'Nginx, PHP scripts, Docker, Git, Web Browsers.'
    },
    function: {
      es: 'El entorno donde se ejecutan todas las aplicaciones normales. Tiene acceso restringido a la memoria y no puede manipular el hardware directamente por razones de seguridad.',
      en: 'The environment where all normal applications run. It has restricted memory access and cannot manipulate hardware directly for security reasons.'
    }
  }
]
