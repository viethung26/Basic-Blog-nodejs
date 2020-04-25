import mongoose from 'mongoose'
import '../models/Article'
export const Article = mongoose.model('Article')

const handleTag = tagStr => {
    const tags = tagStr.split(',').map(tag => tag.trim()).filter(tag => !!tag)
    return tags
}
export const create = async (data) => {
    try {
        console.info('9779 data', data)
        const {tag, user, ...rest} = data
        const userID = user._id
        if (userID) {
            const tags = handleTag(tag)
            const article = new Article({...rest, tags, author: userID})
            return await article.save()

        }
    } catch (err) {
        throw err
    }
}

export const getAll = async () => {
    try {
        return await Article.find()
    } catch (err) {
        throw err
    }
}

export const count = async () => {
    const count = Article.countDocuments()
    return await count
}

export const getBySlug = async (slug) => {
    try {
        return await Article.findOne({
            slug
        })
    } catch (err) {
        throw err
    }
}

export const updateBySlug = async (slug, data) => {
    try {
        return await Article.updateOne({slug}, data)
    } catch (err) {
        throw err
    }
}