import * as UserDAO from '../dao/UserDAO'
import * as PasswordHandler from '../utils/PasswordHandler'
export const getAll = async (req, res, next) => {
    try {
        const data = await UserDAO.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
}

export const create = async (req, res, next) => {
    const {username, password, displayName} = req.body
    console.info('9779 ', req.body)
    try {
        const hash = await PasswordHandler.genHash(password)
        const doc = await UserDAO.create({username, hash, displayName})
        res.json(doc)
    } catch (err) {
        next(err)
    }
}

export const getByUsername = async (req, res, next) => {
    try {
        const {username} = req.params
        const doc = await UserDAO.getByUsername(username)
        res.json(doc)
    } catch (err) {
        next(err)
    }
}

export const remove = async (req, res, next) => {
    try {
        const {username} = req.params
        const doc = await UserDAO.remove(username)
        res.json(doc)
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body
        const user = await UserDAO.getByUsername(username)
        const result = await user.checkPassword(password)
        if (result) {
            return res.json({token: user.generateToken()})
        } else {
            return res.json({error: 'Password is wrong'})
        }
        
    } catch (err) {
        next(err)
    }
}