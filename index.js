const express = require('express')
const path = require('path')
const linkrouter = require('./routers/route.js')
const app = express()

const port = process.env.PORT||4400
const publicdir = path.join(__dirname, './public')
app.set('view engine','hbs')

app.use(express.static(publicdir))
app.use(linkrouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})