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

import app from './app'

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
})
