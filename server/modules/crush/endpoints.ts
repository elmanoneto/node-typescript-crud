import { Router } from 'express'
import CrushRoutes from './routes'

const router = Router()

router.get('/api/crushes', CrushRoutes.getAll)
router.get('/api/crushes/:id', CrushRoutes.getById)
router.post('/api/crushes/', CrushRoutes.create)
router.put('/api/crushes/:id', CrushRoutes.update)
router.delete('/api/crushes/:id', CrushRoutes.delete)

export default router