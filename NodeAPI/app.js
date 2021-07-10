var express = require('express')
var app = express()
const mongoose = require('mongoose')  
require('dotenv/config')
const PORT = 8000

//db connection

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => {
  console.log("connected")
})

 //array of objects

books = [                    
  {
    name: "Think Like A Monk",
    author: "Jay Shetty"
  }, 
  {
    name: "Leadership Wisdom",
    author: "Robin Sharma"
  }
]

//import routes
const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

app.get('/', (req, res) => {
  console.log(books[0].author)
  res.write("We are on home")
  res.end()
})

app.post('/post', (req, res)=>{
    res.write("This is a POST request")
    res.end()
})



app.listen(PORT, () => {
  console.log("Server listening at port", PORT)
})


