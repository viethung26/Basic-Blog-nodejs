import {Router} from 'express'
import apiRoute from './api'
const route = Router()

route.get('/', (req, res) => {
    res.render('index')
})

route.use('/api', apiRoute)

export default route