const express = require('express')
const app = express()
const port = 3085
const setUpDb = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/',router)


setUpDb()

app.listen(port,()=>{
    console.log('listening on port ',port)
})