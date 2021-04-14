const dotenv = require('dotenv').config()

const apiKey = process.env.API_KEY
let json = {
    'message': process.env.API_KEY,
}

module.exports = json
