import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import playerRoutes from './routes/playerRoutes'
import newsRoutes from './routes/newsRoutes'
import authRoutes from './routes/authRoutes'
import matchRoutes from './routes/matchRoutes'
import ticketRoutes from './routes/ticketRoutes'
import membershipRoutes from './routes/membershipRoutes'
import transferRoutes from './routes/transferRoutes'
import adminRoutes from './routes/adminRoutes'

const app = express()

// Middlewares
app.use(helmet())

// CORS configurado
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))

// Body size limit
app.use(express.json({ limit: '1mb' }))

// Rate limiting general para /api
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite general
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes, intenta de nuevo más tarde' },
})
app.use('/api', limiter)

// Routes
app.use('/api', playerRoutes)
app.use('/api', newsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api', matchRoutes)
app.use('/api', ticketRoutes)
app.use('/api', membershipRoutes)
app.use('/api', transferRoutes)
app.use('/api', adminRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
