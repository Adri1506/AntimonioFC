import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[90vh]">
      {/* Background Image — mosaico de hinchas */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/hinchas.png')" }}
        data-testid="hero-bg"
      />

      {/* Dark Overlay — for readability */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 30, 0.7)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Escudo */}
        <img
          src="/img/escudo.png"
          alt="AntimonioFC"
          className="mb-6 w-20 md:w-[120px]"
          loading="eager"
        />

        {/* Title */}
        <h1 className="font-heading text-5xl font-extrabold text-white md:text-7xl">
          Antimonio FC
        </h1>

        {/* Lema */}
        <p className="mt-2 text-xl font-semibold text-accent md:text-2xl">
          Fuerza y Corazón
        </p>

        {/* Subtexto */}
        <p className="mt-2 text-base text-white/70">
          Club Deportivo Fundado en 1958
        </p>

        {/* CTA */}
        <Link to="/socios" className="mt-8">
          <Button variant="accent" size="xl">
            🎟️ Hazte Socio
          </Button>
        </Link>
      </div>
    </section>
  )
}

export { HeroSection }
