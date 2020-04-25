import mongoose from 'mongoose'
import '../models/Category'
import { Article } from './ArticleDAO'

const Category = mongoose.model('Category')

export const getAll = async () => {
    try {
        return await Category.find()
    } catch (err) {
        throw err
    }
}

export const getByName = async (name) => {
    try {
        return await Category.findOne({name})
    } catch (err) {
        throw err
    }
}

export const getById = async (_id) => {
    try {
        return await Category.findOne({_id})
    } catch (err) {
        throw err
    }
}

export const create = async (data) => {
    try {
        const category = new Category(data)
        return await category.save()
    } catch (err) {
        throw err
    }
}

export const updateArticle = async (categoryID, articleID, isRemove = false) => {
    try {
        const category = await Category.findOne({id: categoryID})
        if (category) {
            console.info('9779 ',category.articles) 
        }
    } catch (err) {
        throw err
    }
}

export const remove = async (_id) => {
    try {
        return await Article.remove({_id})
    } catch (err) {
        throw err
    }
}