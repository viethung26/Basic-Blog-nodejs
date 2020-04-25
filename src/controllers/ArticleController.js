import * as ArticleDAO from '../dao/ArticleDAO'
import * as UserDAO from '../dao/UserDAO'
import * as CategoryDAO from '../dao/CategoryDAO'

export const create = async (req, res, next) => {
    try {
        const article = await ArticleDAO.create({...req.body, user: req.user})
        if (article) {
            const user = await UserDAO.getById(article.author)
            await user.addArticle(article._id)
            const category = await CategoryDAO.getById(article.category)
            await category.addArticle(article._id)
            res.status(200).send('OK')
        }
    } catch (err) {
        next(err)
    }
}
export const update = async (req, res, next) => {
    try {
        const {slug} = req.params
        console.info("9779 slug", slug)
        const article = await ArticleDAO.getBySlug(slug)
        const user = await UserDAO.getById(article.author)
        if (article && user && String(article.author) === String(user._id)) {
            const result = await ArticleDAO.updateBySlug(slug, req.body)
            console.info("9779 result", result)
            res.status(200).send('OK')
        }
    } catch (err) {
        next(err)
    }
}

export const remove = async (req, res, next) => {
    try {
        const {slug} = req.params
        const article = await ArticleDAO.getBySlug(slug)
        const user = await UserDAO.getById(article.author)
        await user.removeArticle(article._id)
        const category = await CategoryDAO.getById(article.category)
        await category.removeArticle(article._id)
        await article.remove()
        res.status(200).end('OK delete')
        
    } catch (err) {
        next(err)
    }
}

export const getAll = async (req, res, next) => {
    try {
        const list = await ArticleDAO.getAll()
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const getBySlug = async (req, res, next) => {
    const {slug} = req.params
    try {
        const article = await ArticleDAO.getBySlug(slug)
        // const {title, content} = article
        res.status(200).json(article)
    } catch (err) {
        next(err)
    }
}