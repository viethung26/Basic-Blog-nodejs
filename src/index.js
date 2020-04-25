import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import mongoose from 'mongoose'
import indexRouter from './routes'
import './models/Article'
import dotenv from 'dotenv'
import errorHandler from "./middleware/errorHandler";

dotenv.config()
mongoose.connect('mongodb://localhost:27017/basic-blog', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true);
const app = express()
const PORT = 8080

app.use(morgan('dev'))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', indexRouter)

app.use(errorHandler)

// app.use((err, req, res, next) => {
//     // console.error(err.stack)
//     res.status(404).send('Something broke!')
// })

app.listen(PORT, () => {
    console.info(`Running on port ${PORT}...`)
})