import * as CategoryDAO from '../dao/CategoryDAO'

export const getAll = async (req, res, next) => {
    try {
        const doc = await CategoryDAO.getAll()
        res.json(doc)
    } catch (err) {
        next(err)
    }
}

export const getByName = async (req, res, next) => {
    try {
        const {categoryName: name} = req.params
        const doc = await CategoryDAO.getByName(name)
        res.json(doc)
    } catch (err) {
        next(err)
    }
}
export const create = async (req, res, next) => {
    const {name, displayName} = req.body
    try {
        const doc = await CategoryDAO.create({name, displayName})
        res.json(doc)
    } catch (err) {
        next(err)
    }
}

// export const addArticle = async (req, res, next) => {
//     const {displayName} = req.body
//     try {
//         const doc = await CategoryDAO.update({name})
//         res.json(doc)
//     } catch (err) {
//         next(err)
//     }
// }

