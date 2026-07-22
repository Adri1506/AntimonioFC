import { Router } from 'express'
import * as ticketController from '../controllers/ticketController'
import { requireAuth } from '../middleware/auth'

const router = Router()

router.post('/entradas', requireAuth, ticketController.comprarEntrada)
router.get('/mis-entradas', requireAuth, ticketController.getMisEntradas)

export default router
