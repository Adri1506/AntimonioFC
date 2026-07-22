import { Router } from 'express'
import { getAllFichajes, getFichajesResumen } from '../controllers/transferController'

const router = Router()

// Important: /fichajes/resumen must come before /fichajes to avoid route conflict
router.get('/fichajes/resumen', getFichajesResumen)
router.get('/fichajes', getAllFichajes)

export default router
