if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

// Set up routers
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')

// Set up EJS views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

// Set up express
app.use(expressLayouts)
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

// Set up mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.on('open', () => console.log('Connected to Mongoose'))

// Use the router
app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

app.listen(process.env.PORT || 3000)