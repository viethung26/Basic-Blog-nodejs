import mongoose from 'mongoose'
import '../models/User'

const User = mongoose.model('User')

export const getAll = async () => {
    try {
        return await User.find()
    } catch (err) {
        throw err
    }
}

export const getByUsername = async (username) => {
    try {
        return await User.findOne({username})
    } catch (err) {
        throw err
    }
}

export const getById = async (_id) => {
    try {
        return await User.findOne({_id})
    } catch (err) {
        throw err
    }
}

export const create = async (data) => {
    try {
        const user = new User(data)
        return await user.save()
    } catch (err) {
        throw err
    }
}

export const remove = async (username) => {
    try {
        return await User.remove({username})
    } catch (err) {
        throw err
    }
}

export const updateArticle = async (userID, articleID, isRemove = false) => {
    try {
        const user = await User.findOne({id: userID})
        if (user) {
            console.info('9779 ',user.articles) 
        }
    } catch (err) {
        throw err
    }
}