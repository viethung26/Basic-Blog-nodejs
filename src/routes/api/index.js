import {Router} from 'express'
import articleRoute from './article'
import userRoute from './user'
import categoryRoute from './category'
import loginRoute from './login'
const route = Router()

route.use('/article', articleRoute)
route.use('/user', userRoute)
route.use('/category', categoryRoute)
route.use('/login', loginRoute)

export default route