import type { SectionConfig } from '../data/types'

export const sections: SectionConfig[] = [
  {
    id: 'home',
    name: 'Inicio',
    path: '/',
    icon: 'home',
    color: 'green',
    description: 'Página principal con acceso a todas las secciones.'
  },
  {
    id: 'architecture',
    name: 'Arquitectura',
    path: '/arquitectura',
    icon: 'layers',
    color: 'green',
    description: 'Desarma el sistema operativo capa por capa: Hardware, Kernel, Shell y Espacio de Usuario.'
  },
  {
    id: 'flow',
    name: 'Flujo de Datos',
    path: '/flujo',
    icon: 'git-branch',
    color: 'yellow',
    description: 'Entiende stdout, stderr, pipes y el famoso agujero negro /dev/null.'
  },
  {
    id: 'permissions',
    name: 'Permisos',
    path: '/permisos',
    icon: 'lock',
    color: 'blue',
    description: 'Sistema de archivos, usuarios, grupos y el control de acceso en Linux.'
  },
  {
    id: 'processes',
    name: 'Procesos',
    path: '/procesos',
    icon: 'cpu',
    color: 'purple',
    description: 'PID, demonios, monitoreo con htop y cómo matar procesos rebeldes.'
  },
  {
    id: 'commands',
    name: 'Comandos Backend',
    path: '/comandos-backend',
    icon: 'terminal',
    color: 'green',
    description: 'Los 25 comandos de Linux más usados por un desarrollador backend.'
  }
]

export const navigationSections = sections.filter((s) => s.id !== 'home')
