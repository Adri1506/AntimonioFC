import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import * as authController from '../controllers/authController'
import { requireAuth } from '../middleware/auth'

const router = Router()

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Demasiados intentos de inicio de sesión' },
})

router.post('/register', authController.register)
router.post('/login', authLimiter, authController.login)
router.get('/perfil', requireAuth, authController.perfil)

export default router
