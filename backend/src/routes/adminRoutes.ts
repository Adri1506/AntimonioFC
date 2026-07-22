import { Router } from 'express'
import { requireAdmin } from '../middleware/auth'
import {
  getDashboard,
  getSocios,
  getEntradas,
} from '../controllers/adminController'

const router = Router()

router.get('/admin/dashboard', requireAdmin, getDashboard)
router.get('/admin/socios', requireAdmin, getSocios)
router.get('/admin/entradas', requireAdmin, getEntradas)

export default router
