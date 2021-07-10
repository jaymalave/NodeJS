const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.DBCON, () => {console.log('Connected to DB')})

const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)


app.listen(8000, () => console.log('Server is Up and Running'))