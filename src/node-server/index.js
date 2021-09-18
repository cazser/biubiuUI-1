const express = require('express')
const multer = require('multer')
const upload = multer({ dest: "yyy/" })
const app = express()
app.get('/', (request, response) => {
    response.send('hello  nodejs ')
})
app.post('/upload', upload.single('xxx'), (request, response) => {
    console.log(request.file)
    response.send(request.file.filename)
})

app.listen(3000)