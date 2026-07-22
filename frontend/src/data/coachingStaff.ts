export interface CoachingStaff {
  id: number
  nombre: string
  edad: number
  rol: string
  nacionalidad: string
  foto: string | null
  descripcion: string
}

export const coachingStaff: CoachingStaff[] = [
  {
    id: 1,
    nombre: 'Eduardo Zamorano',
    edad: 54,
    rol: 'DT',
    nacionalidad: 'Chilena',
    foto: 'img/DT.png',
    descripcion: 'Ex seleccionado nacional. 20 años de experiencia como entrenador.',
  },
  {
    id: 2,
    nombre: 'Patricio Palma',
    edad: 48,
    rol: 'Asistente',
    nacionalidad: 'Chilena',
    foto: null, // TODO: img/coach-asistente.png no existe aún
    descripcion: 'Asistente técnico, especialista en formación táctica.',
  },
  {
    id: 3,
    nombre: 'Marcelo Briones',
    edad: 42,
    rol: 'PF',
    nacionalidad: 'Chilena',
    foto: null,
    descripcion: 'Preparador Físico, master en ciencias del deporte.',
  },
  {
    id: 4,
    nombre: 'Dr. Juan Pablo Lagos',
    edad: 50,
    rol: 'Médico',
    nacionalidad: 'Chilena',
    foto: null,
    descripcion: 'Médico deportólogo del club desde 2018.',
  },
]

export const roleLabels: Record<string, string> = {
  DT: 'Director Técnico',
  Asistente: 'Asistente Técnico',
  PF: 'Preparador Físico',
  Médico: 'Médico Deportólogo',
}
