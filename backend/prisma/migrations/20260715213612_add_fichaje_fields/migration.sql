-- CreateEnum
CREATE TYPE "TipoFichaje" AS ENUM ('ALTA', 'BAJA');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jugador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "posicion" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "foto" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffTecnico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "rol" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "foto" TEXT,
    "descripcion" TEXT,

    CONSTRAINT "StaffTecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" SERIAL NOT NULL,
    "rival" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "estadio" TEXT NOT NULL,
    "competicion" TEXT NOT NULL,
    "local" BOOLEAN NOT NULL DEFAULT true,
    "precioPreferencia" DOUBLE PRECISION NOT NULL DEFAULT 15.0,
    "precioGeneral" DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    "precioVisita" DOUBLE PRECISION NOT NULL DEFAULT 12.0,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "fuente" TEXT NOT NULL,
    "url" TEXT,
    "imagen" TEXT,
    "categoria" TEXT NOT NULL,
    "fechaPublicacion" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entrada" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "partidoId" INTEGER NOT NULL,
    "sector" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "codigoQr" TEXT NOT NULL,
    "fechaCompra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entrada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Socio" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMP(3),
    "descuentoEntradas" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "renovacionAutomatica" BOOLEAN NOT NULL DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Socio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fichaje" (
    "id" SERIAL NOT NULL,
    "jugadorId" INTEGER NOT NULL,
    "tipo" "TipoFichaje" NOT NULL,
    "clubOrigen" TEXT NOT NULL,
    "clubDestino" TEXT NOT NULL,
    "tipoOperacion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "monto" DOUBLE PRECISION,
    "descripcion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fotoUrl" TEXT,

    CONSTRAINT "Fichaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_numero_key" ON "Jugador"("numero");

-- CreateIndex
CREATE INDEX "Entrada_usuarioId_idx" ON "Entrada"("usuarioId");

-- CreateIndex
CREATE INDEX "Entrada_partidoId_idx" ON "Entrada"("partidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Socio_usuarioId_key" ON "Socio"("usuarioId");

-- CreateIndex
CREATE INDEX "Fichaje_jugadorId_idx" ON "Fichaje"("jugadorId");

-- AddForeignKey
ALTER TABLE "Entrada" ADD CONSTRAINT "Entrada_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrada" ADD CONSTRAINT "Entrada_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Socio" ADD CONSTRAINT "Socio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fichaje" ADD CONSTRAINT "Fichaje_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
