const express = require('express')
const path = require('path')
const linkrouter = require('./routers/route.js')
const app = express()
const cors = require('cors')
const port = process.env.PORT||4400
const publicdir = path.join(process.cwd(), './public')
app.set('view engine','hbs')
app.use(cors())
app.use(express.static(publicdir))
  
app.use(linkrouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });