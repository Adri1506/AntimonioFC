import { Router } from 'express'
import { requireAdmin } from '../middleware/auth'
import {
  getAllJugadores,
  getJugadorById,
  createPlayer,
  updatePlayer,
  deactivatePlayer,
} from '../controllers/playerController'

const router = Router()

router.get('/jugadores', getAllJugadores)
router.get('/jugadores/:id', getJugadorById)
router.post('/jugadores', requireAdmin, createPlayer)
router.put('/jugadores/:id', requireAdmin, updatePlayer)
router.delete('/jugadores/:id', requireAdmin, deactivatePlayer)

export default router
