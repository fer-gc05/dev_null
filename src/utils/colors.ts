export const colorMap: Record<string, string> = {
  green: 'var(--green)',
  blue: 'var(--blue)',
  yellow: 'var(--yellow)',
  purple: 'var(--purple)',
  red: 'var(--red)'
}

export const glowMap: Record<string, string> = {
  green: '0 0 20px rgba(46, 160, 67, 0.3)',
  blue: '0 0 20px rgba(88, 166, 255, 0.3)',
  yellow: '0 0 20px rgba(210, 153, 34, 0.3)',
  purple: '0 0 20px rgba(188, 140, 255, 0.3)',
  red: '0 0 20px rgba(248, 81, 73, 0.3)'
}

export const getColor = (color: string): string => colorMap[color] || colorMap.green
export const getGlow = (color: string): string => glowMap[color] || glowMap.green
