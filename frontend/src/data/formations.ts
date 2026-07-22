export interface FormationConfig {
  id: string
  nombre: string
  descripcion: string
  posiciones: { numero: number; x: number; y: number }[]
}

export const formations: Record<string, FormationConfig> = {
  '4-4-2': {
    id: '4-4-2',
    nombre: '4-4-2',
    descripcion: 'Clásico y equilibrado',
    posiciones: [
      { numero: 1, x: 50, y: 92 },
      { numero: 2, x: 12, y: 72 },
      { numero: 4, x: 35, y: 75 },
      { numero: 5, x: 65, y: 75 },
      { numero: 13, x: 88, y: 72 },
      { numero: 7, x: 8, y: 50 },
      { numero: 6, x: 30, y: 48 },
      { numero: 8, x: 70, y: 48 },
      { numero: 16, x: 92, y: 50 },
      { numero: 9, x: 35, y: 22 },
      { numero: 10, x: 65, y: 22 },
    ],
  },
  '4-3-3': {
    id: '4-3-3',
    nombre: '4-3-3',
    descripcion: 'Ataque total',
    posiciones: [
      { numero: 1, x: 50, y: 92 },
      { numero: 2, x: 12, y: 72 },
      { numero: 4, x: 35, y: 75 },
      { numero: 5, x: 65, y: 75 },
      { numero: 13, x: 88, y: 72 },
      { numero: 6, x: 30, y: 48 },
      { numero: 8, x: 50, y: 45 },
      { numero: 15, x: 70, y: 48 },
      { numero: 18, x: 15, y: 22 },
      { numero: 9, x: 50, y: 18 },
      { numero: 11, x: 85, y: 22 },
    ],
  },
  '4-2-3-1': {
    id: '4-2-3-1',
    nombre: '4-2-3-1',
    descripcion: 'Posesión y control',
    posiciones: [
      { numero: 1, x: 50, y: 92 },
      { numero: 14, x: 12, y: 72 },
      { numero: 3, x: 35, y: 75 },
      { numero: 4, x: 65, y: 75 },
      { numero: 13, x: 88, y: 72 },
      { numero: 6, x: 30, y: 55 },
      { numero: 15, x: 70, y: 55 },
      { numero: 7, x: 8, y: 38 },
      { numero: 10, x: 50, y: 35 },
      { numero: 16, x: 92, y: 38 },
      { numero: 9, x: 50, y: 18 },
    ],
  },
}

export const formacionPorDefecto = '4-4-2'
