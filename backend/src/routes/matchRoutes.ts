import { Router } from 'express'
import { requireAdmin } from '../middleware/auth'
import {
  getProximosPartidos,
  getTodosPartidos,
  getPartidoById,
  createMatch,
  updateMatch,
  deleteMatch,
} from '../controllers/matchController'

const router = Router()

router.get('/partidos', (req, res, next) => {
  const proximos = req.query.proximos === 'true'
  if (proximos) {
    return getProximosPartidos(req, res)
  }
  return getTodosPartidos(req, res)
})
router.get('/partidos/proximos', getProximosPartidos)
router.get('/partidos/:id', getPartidoById)
router.post('/partidos', requireAdmin, createMatch)
router.put('/partidos/:id', requireAdmin, updateMatch)
router.delete('/partidos/:id', requireAdmin, deleteMatch)

export default router
