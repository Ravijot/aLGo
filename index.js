const express = require('express')
const path = require('path')
const linkrouter = require('./routers/route.js')
const app = express()
const cors = require('cors')
const port = process.env.PORT||4400
const publicdir = path.join(__dirname, './public')
app.set('view engine','hbs')
app.use(cors())
app.use(express.static(publicdir))
app.use('/images', express.static('images'));  
app.use(linkrouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
process.on('uncaughtException', err => {
    console.log(`Uncaught Exception: ${err.message}`)
    process.exit(1)
  })