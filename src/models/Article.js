import mongoose from 'mongoose'
import slugify from 'slugify'

const ObjectID = mongoose.Schema.Types.ObjectId
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "can't be blank"],
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: ObjectID,
        ref: 'category',
        required: true
    },
    author: {
        type: ObjectID,
        ref: 'user',
        required: true
    },
    content: String, 
    tags: Array
}, {timestamps: true})

ArticleSchema.pre("validate", function(next) {
    this.slugify()
    next()
})


ArticleSchema.methods.slugify = function(){
    const newSlug = slugify(this.title)
    console.info("9779 new slug", newSlug)
    if (newSlug !== this.slug) {
        this.slug = newSlug
    }
}

mongoose.model('Article', ArticleSchema)