require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/Home', (req, res) => {
    res.send('my home page')      

})

app.get('/login', (req, res) => {
    res.send("<p>this is my log in page </p>")

})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})