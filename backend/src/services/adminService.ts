import prisma from '../utils/prisma'

export async function getDashboardCounts() {
  const [jugadores, socios, entradas, noticias] = await Promise.all([
    prisma.jugador.count({ where: { activo: true } }),
    prisma.socio.count({ where: { activo: true } }),
    prisma.entrada.count(),
    prisma.noticia.count(),
  ])

  return {
    jugadores,
    socios,
    entradas,
    noticias,
  }
}
