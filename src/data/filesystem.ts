import type { FileNode } from './types'

export const fileTree: FileNode[] = [
  {
    name: '/',
    type: 'directory',
    permissions: 'drwxr-xr-x',
    children: [
      {
        name: 'bin',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: [
          { name: 'ls', type: 'file', permissions: '-rwxr-xr-x' },
          { name: 'cp', type: 'file', permissions: '-rwxr-xr-x' },
          { name: 'mkdir', type: 'file', permissions: '-rwxr-xr-x' },
          { name: 'cat', type: 'file', permissions: '-rwxr-xr-x' }
        ]
      },
      {
        name: 'etc',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: [
          {
            name: 'nginx',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: [
              { name: 'nginx.conf', type: 'file', permissions: '-rw-r--r--' },
              { name: 'sites-available', type: 'directory', permissions: 'drwxr-xr-x', children: [] }
            ]
          },
          {
            name: 'php',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: [
              { name: 'php.ini', type: 'file', permissions: '-rw-r--r--' },
              { name: '8.2', type: 'directory', permissions: 'drwxr-xr-x', children: [] }
            ]
          },
          { name: 'passwd', type: 'file', permissions: '-rw-r--r--' },
          { name: 'hosts', type: 'file', permissions: '-rw-r--r--' }
        ]
      },
      {
        name: 'home',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: [
          {
            name: 'dev_null',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: [
              { name: 'projects', type: 'directory', permissions: 'drwxr-xr-x', children: [] },
              { name: '.ssh', type: 'directory', permissions: 'drwx------', children: [] },
              { name: '.zshrc', type: 'file', permissions: '-rw-r--r--' }
            ]
          }
        ]
      },
      {
        name: 'var',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: [
          {
            name: 'log',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: [
              { name: 'nginx', type: 'directory', permissions: 'drwxr-xr-x', children: [] },
              { name: 'syslog', type: 'file', permissions: '-rw-r-----' }
            ]
          },
          {
            name: 'www',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: [
              { name: 'html', type: 'directory', permissions: 'drwxr-xr-x', children: [] }
            ]
          }
        ]
      },
      {
        name: 'dev',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: [
          { name: 'null', type: 'file', permissions: 'crw-rw-rw-' },
          { name: 'zero', type: 'file', permissions: 'crw-rw-rw-' },
          { name: 'random', type: 'file', permissions: 'crw-rw-rw-' }
        ]
      },
      { name: 'tmp', type: 'directory', permissions: 'drwxrwxrwt', children: [] },
      { name: 'root', type: 'directory', permissions: 'drwx------', children: [] }
    ]
  }
]
