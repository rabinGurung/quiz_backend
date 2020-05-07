const app = require('express')()
const bodyparser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 8000
const question = require('./Routes/question')
const answer = require('./Routes/answer')
require('./DB_Connection/connection')
app.use(bodyparser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

app.use('/question',question)
app.use('/answer',answer)
app.listen(port,()=>console.log('server started'))







