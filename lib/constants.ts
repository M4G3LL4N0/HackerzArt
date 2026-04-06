export const DEFAULT_WIDTH = 80
export const DEFAULT_DENSITY = 'medium'
export const DEFAULT_CONTRAST = 'medium'
export const DEFAULT_STYLE = 'hacker'

export const WIDTH_OPTIONS = [
  { value: 40, label: 'Narrow' },
  { value: 80, label: 'Standard' },
  { value: 120, label: 'Wide' }
]

export const DENSITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
]

export const CONTRAST_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
]

export const STATUS_COLORS = {
  pending: 'gray',
  processing: 'blue',
  completed: 'green',
  failed: 'red'
}
