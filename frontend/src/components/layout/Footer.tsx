/* Social media icons as inline SVGs (lucide doesn't include brand icons) */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

const footerColumns = [
  {
    title: "Club",
    links: [
      { label: "Historia", href: "/historia" },
      { label: "Estadio", href: "/estadio" },
      { label: "Contacto", href: "/contacto" },
      { label: "Prensa", href: "/prensa" },
    ],
  },
  {
    title: "Equipo",
    links: [
      { label: "Plantilla", href: "/plantilla" },
      { label: "Formación", href: "/formacion" },
      { label: "Cuerpo Técnico", href: "/cuerpo-tecnico" },
    ],
  },
  {
    title: "Afición",
    links: [
      { label: "Entradas", href: "/entradas" },
      { label: "Socios", href: "/socios" },
      { label: "Noticias", href: "/noticias" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
]

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/AntimonioFC", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com/AntimonioFC", icon: InstagramIcon },
  { label: "Twitter / X", href: "https://twitter.com/AntimonioFC", icon: XIcon },
  { label: "YouTube", href: "https://youtube.com/@AntimonioFC", icon: YoutubeIcon },
]

function Footer() {
  return (
    <footer className="bg-gradient-dark text-white/80" style={{ background: 'linear-gradient(135deg, #000052 0%, #000080 100%)' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid de columnas */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="mt-10 flex items-center justify-center gap-6 border-t border-white/10 pt-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-accent hover:text-white"
                aria-label={social.label}
              >
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>

        {/* Escudo central */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <img
            src="/img/escudo.png"
            alt="AntimonioFC"
            className="h-16 w-16 opacity-80"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget
              img.style.display = "none"
              const fallback = img.parentElement?.querySelector('[data-fallback="shield-footer"]') as HTMLElement | null
              if (fallback) {
                fallback.style.display = "flex"
              }
            }}
          />
          <span
            data-fallback="shield-footer"
            className="hidden h-16 w-16 items-center justify-center rounded-full bg-accent/80 text-lg font-bold text-white"
          >
            AFC
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-white/40">
          &copy; 2026 Club Deportivo AntimonioFC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export { Footer }
