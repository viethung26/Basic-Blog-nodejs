import mongoose from 'mongoose'
const ObjectID = mongoose.Schema.Types.ObjectId
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String
    },
    articles: [{type: ObjectID, ref: 'article'}]
}, {timestamps: true})

CategorySchema.methods.addArticle = async function (articleID) {
    if (!this.articles.includes(articleID)) {
        this.articles.push(articleID)
        return await this.save()
    }
}

CategorySchema.methods.removeArticle = async function (articleID) {
    const index = this.articles.indexOf(articleID)
    console.info('9779 index', index)
    if (index !== -1) {
        this.articles.splice(index, 1)
        return await this.save()
    }
}

mongoose.model("Category", CategorySchema)