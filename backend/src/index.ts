import dotenv from 'dotenv'

dotenv.config()

// Validación de variables de entorno requeridas
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET']
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Error: ${envVar} no está definido en el entorno`)
    process.exit(1)
  }
}

// Import dinámico: asegura que dotenv.config() se ejecute ANTES
// de que se carguen los módulos (jwt.ts, etc.) que dependen de process.env
async function start() {
  const { default: app } = await import('./app')

  const PORT = process.env.PORT || 3001

  app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`)
  })
}

start().catch(console.error)
