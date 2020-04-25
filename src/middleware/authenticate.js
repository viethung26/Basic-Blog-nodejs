import jwt from 'jsonwebtoken'
import * as UserDAO from '../dao/UserDAO'

const getToken = (req) => {
    const {authorization: token} = req.headers
    return token
}


export default async (req, res, next) => {
    try {
        const token = getToken(req)
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
        const user = await UserDAO.getById(decoded.id)
        if (user) {
            req.user = user
            next()
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        req.user = null
        next(err)
    }
}