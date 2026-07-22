import { Router } from 'express'
import * as membershipController from '../controllers/membershipController'
import { requireAuth } from '../middleware/auth'

const router = Router()

router.post('/socios', requireAuth, membershipController.afiliarSocio)
router.get('/mi-membresia', requireAuth, membershipController.getMiMembresia)

export default router
