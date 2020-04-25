import {Router} from 'express'
import * as CategoryController from '../../controllers/CategoryController'

const route = Router()

route.get('/', CategoryController.getAll)
route.get('/:categoryName', CategoryController.getByName)
route.post('/', CategoryController.create)

export default route