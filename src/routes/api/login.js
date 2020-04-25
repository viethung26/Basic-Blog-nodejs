import {Router} from 'express'
import * as UserController from '../../controllers/UserController'
const route = Router()

route.get('/', (req, res) => {
    console.info('9779 test')
})
route.post('/', UserController.login)

export default route