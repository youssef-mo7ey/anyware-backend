const dotenv=require('dotenv');
dotenv.config()
const express = require('express')
const app = express()
var cors = require('cors')
const db = require("./config/db")
const PORT= process.env.PORT || 8081
app.use(cors())
app.use(express.json())


const router = require('./routes/routes');
app.use('/',router )

db()
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})