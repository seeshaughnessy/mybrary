const mongoose = require('mongoose')

// Create schema (table)
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        reaquired: true
    }
})

module.exports = mongoose.model('Author', authorSchema)