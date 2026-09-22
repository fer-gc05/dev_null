import type { SectionConfig } from '../data/types'

export const sections: SectionConfig[] = [
  {
    id: 'home',
    name: 'nav.home',
    path: '/',
    icon: 'home',
    color: 'green',
    description: {
      es: 'Página principal con acceso a todas las secciones.',
      en: 'Home page with access to all sections.'
    }
  },
  {
    id: 'architecture',
    name: 'nav.architecture',
    path: '/architecture',
    icon: 'layers',
    color: 'green',
    description: {
      es: 'Desarma el sistema operativo capa por capa: Hardware, Kernel, Shell y Espacio de Usuario.',
      en: 'Breaks down the operating system layer by layer: Hardware, Kernel, Shell and User Space.'
    }
  },
  {
    id: 'flow',
    name: 'nav.flow',
    path: '/flow',
    icon: 'git-branch',
    color: 'yellow',
    description: {
      es: 'Entiende stdout, stderr, pipes y el famoso agujero negro /dev/null.',
      en: 'Understand stdout, stderr, pipes and the famous black hole /dev/null.'
    }
  },
  {
    id: 'permissions',
    name: 'nav.permissions',
    path: '/permissions',
    icon: 'lock',
    color: 'blue',
    description: {
      es: 'Sistema de archivos, usuarios, grupos y el control de acceso en Linux.',
      en: 'Filesystem, users, groups and access control in Linux.'
    }
  },
  {
    id: 'processes',
    name: 'nav.processes',
    path: '/processes',
    icon: 'cpu',
    color: 'purple',
    description: {
      es: 'PID, demonios, monitoreo con htop y cómo matar procesos rebeldes.',
      en: 'PIDs, daemons, monitoring with htop and how to kill runaway processes.'
    }
  },
  {
    id: 'commands',
    name: 'nav.commands',
    path: '/commands',
    icon: 'terminal',
    color: 'green',
    description: {
      es: 'Los 25 comandos de Linux más usados por un desarrollador backend.',
      en: 'The 25 Linux commands most used by a backend developer.'
    }
  }
]

export const navigationSections = sections.filter((s) => s.id !== 'home')
