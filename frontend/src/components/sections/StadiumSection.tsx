import { MapPin, Users, Ruler, Calendar } from "lucide-react"

function StadiumSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Fondo: estadio con capa oscura */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/estadio.png')" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 30, 0.8)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Info del estadio */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl">
              Nuestro Estadio
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              El Estadio Municipal de Antimonio es la casa del club desde sus inicios.
              Con una capacidad para miles de almas, cada partido se vive con la
              pasión que caracteriza a nuestra hinchada.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}>
                  <MapPin className="size-5" style={{ color: '#FF6500' }} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Ubicación</p>
                  <p className="text-sm font-semibold text-white">Av. del Estadio 1234</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}>
                  <Users className="size-5" style={{ color: '#FF6500' }} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Capacidad</p>
                  <p className="text-sm font-semibold text-white">15.000 espectadores</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}>
                  <Ruler className="size-5" style={{ color: '#FF6500' }} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Dimensiones</p>
                  <p className="text-sm font-semibold text-white">105 × 68 m</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}>
                  <Calendar className="size-5" style={{ color: '#FF6500' }} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Inauguración</p>
                  <p className="text-sm font-semibold text-white">15 de marzo, 1960</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen del estadio interior */}
          <div className="relative">
            <img
              src="/img/estadioInterior.png"
              alt="Interior del Estadio"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              📸 Vista interior del Estadio Municipal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { StadiumSection }
