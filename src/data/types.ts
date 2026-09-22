export interface Bi {
  es: string
  en: string
}

export interface ArchitectureLayer {
  title: Bi
  analogy: Bi
  examples: Bi
  function: Bi
}

export interface FlowItem {
  title: Bi
  color: 'green' | 'red' | 'yellow'
  desc: Bi
  code: string
  output: Bi
}

export interface PermissionItem {
  title: Bi
  desc: Bi
  dev?: Bi
  code?: Bi
}

export interface ProcessItem {
  title: Bi
  desc: Bi
  codeLines: string[]
}

export interface Command {
  numero: number
  comando: string
  queHace: Bi
  cuandoUsarlo: Bi
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
  description: Bi
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
  section: Bi
  title: string
  path: string
  keywords: string[]
}

export interface BreadcrumbItem {
  label: string
  path?: string
}
