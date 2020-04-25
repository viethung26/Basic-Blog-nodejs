import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import * as PasswordHandler from '../utils/PasswordHandler'

const ObjectID = mongoose.Schema.Types.ObjectID
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    articles: [{type: ObjectID, ref: 'article'}],
    role: String
}, {timestamps: true})

UserSchema.methods.generateToken = function () {
    return jwt.sign({id: this._id, username: this.username, displayName: this.displayName, role: this.role}, process.env.PRIVATE_KEY, {expiresIn: "1d"})
}

UserSchema.methods.checkPassword = function (password) {
    console.info('9779 check pass', password, this.hash)
    return PasswordHandler.comparePassword(password, this.hash)
}

UserSchema.methods.addArticle = async function (articleID) {
    if (!this.articles.includes(articleID)) {
        this.articles.push(articleID)
        return await this.save()
    }
}

UserSchema.methods.removeArticle = async function (articleID) {
    const index = this.articles.indexOf(articleID)
    console.info('9779 index', index)
    if (index !== -1) {
        this.articles.splice(index, 1)
        return await this.save()
    }
}


mongoose.model('User', UserSchema)