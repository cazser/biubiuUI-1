const express = require('express')
const multer = require('multer')
const cors = require('cors')
const upload = multer({ dest: "uploads/" })
const app = express()
app.options('/upload', cors())
app.get('/', cors(), (request, response) => {
    //response.send('hello  nodejs ')
})
app.post('/upload', cors(), upload.single('file'), (request, response) => {
    try {
        response.set({ 'Access-Control-Allow-Origin': '*' })
        response.send(request.file.filename)
    } catch (e) {
        console.log(e)
    }
})

app.get('/preview/:key', cors(), (request, response) => {
    console.log(request.params.key)
    response.sendFile(`uploads/${request.params.key}`, {
        root: __dirname,
        headers: {
            "Content-Type": 'img/jpg'
        }
    }, (error) => {
        console.log(error);
    })
})
var port = process.env.PORT || 3000
app.listen(3000)