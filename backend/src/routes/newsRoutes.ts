import { Router } from 'express'
import { requireAdmin } from '../middleware/auth'
import {
  getAllNoticias,
  getNoticiaById,
  createNoticia,
  updateNoticia,
  deleteNoticia,
} from '../controllers/newsController'

const router = Router()

router.get('/noticias', getAllNoticias)
router.get('/noticias/:id', getNoticiaById)
router.post('/noticias', requireAdmin, createNoticia)
router.put('/noticias/:id', requireAdmin, updateNoticia)
router.delete('/noticias/:id', requireAdmin, deleteNoticia)

export default router
