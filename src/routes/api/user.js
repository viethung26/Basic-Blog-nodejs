import {Router} from 'express'
import * as UserController from '../../controllers/UserController'
import authMiddleware from '../../middleware/authenticate'
const route = Router()

route.get('/', authMiddleware, UserController.getAll)
route.get('/:username', UserController.getByUsername)
route.post('/', UserController.create)
route.delete('/:username', UserController.remove)
export default route