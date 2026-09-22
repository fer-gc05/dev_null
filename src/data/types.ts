export interface ArchitectureLayer {
  title: string
  analogy: string
  examples: string
  function: string
}

export interface FlowItem {
  title: string
  color: 'green' | 'red' | 'yellow'
  desc: string
  code: string
  output: string
}

export interface PermissionItem {
  title: string
  desc: string
  dev?: string
  code?: string
}

export interface ProcessItem {
  title: string
  desc: string
  codeLines: string[]
}

export interface Command {
  numero: number
  comando: string
  queHace: string
  cuandoUsarlo: string
  output: string[]
}

export interface CommandBlock {
  bloque: string
  color: string
  comandos: Command[]
}

export interface SectionConfig {
  id: string
  name: string
  path: string
  icon: string
  color: string
  description: string
}

export interface FileNode {
  name: string
  type: 'file' | 'directory'
  permissions?: string
  owner?: string
  group?: string
  children?: FileNode[]
}

export interface ProcessNode {
  pid: number
  name: string
  status: 'running' | 'sleeping' | 'zombie'
  cpu: number
  memory: number
  children?: ProcessNode[]
}

export interface SearchIndexItem {
  id: string
  section: string
  title: string
  path: string
  keywords: string[]
}

export interface BreadcrumbItem {
  label: string
  path?: string
}
