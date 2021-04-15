var path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const fetch = require("node-fetch");
const app = express()

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/test', function (req, res) {

    const url = req.body.url

    fetch("https://api.meaningcloud.com/sentiment-2.1?key="+process.env.API_KEY+"&url="+url+"&lang=en", {
        method: 'POST',
        redirect: 'follow'
        })
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .then(({ status, body }) => {
        console.log(status)
        return body
    })
    .then(data=>res.json(data))
    .catch(error => console.log('error', error));

})
