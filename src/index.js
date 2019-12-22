import express from 'express'
import morgan from 'morgan'


const app = express()
const PORT = 8080

app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.end('hi')
})

app.listen(PORT, () => {
    console.info(`Running on port ${PORT}...`)
})