import {Router} from 'express'
import * as ArticleController from '../../controllers/ArticleController'
import authMiddleware from '../../middleware/authenticate'

const route = Router()

route.post('/', authMiddleware, ArticleController.create)
route.get('/', ArticleController.getAll)
route.get('/:slug', ArticleController.getBySlug)
route.put('/:slug', authMiddleware, ArticleController.update)
route.delete('/:slug', authMiddleware, ArticleController.remove)
export default route