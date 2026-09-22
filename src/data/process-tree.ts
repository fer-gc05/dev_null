import type { ProcessNode } from './types'

export const processTree: ProcessNode[] = [
  {
    pid: 1,
    name: 'systemd',
    status: 'running',
    cpu: 0.1,
    memory: 2.3,
    children: [
      {
        pid: 842,
        name: 'nginx',
        status: 'running',
        cpu: 0.3,
        memory: 1.2,
        children: [
          { pid: 843, name: 'nginx: worker', status: 'running', cpu: 0.5, memory: 0.8 },
          { pid: 844, name: 'nginx: worker', status: 'sleeping', cpu: 0.0, memory: 0.7 }
        ]
      },
      {
        pid: 1024,
        name: 'php-fpm',
        status: 'running',
        cpu: 2.1,
        memory: 15.4,
        children: [
          { pid: 1025, name: 'php-fpm: pool www', status: 'running', cpu: 1.8, memory: 12.1 },
          { pid: 1026, name: 'php-fpm: pool www', status: 'sleeping', cpu: 0.0, memory: 8.3 }
        ]
      },
      {
        pid: 645,
        name: 'redis-server',
        status: 'sleeping',
        cpu: 0.2,
        memory: 4.7,
        children: []
      },
      {
        pid: 723,
        name: 'mysqld',
        status: 'running',
        cpu: 1.5,
        memory: 45.2,
        children: [{ pid: 724, name: 'mysqld: worker', status: 'sleeping', cpu: 0.0, memory: 8.1 }]
      }
    ]
  }
]
