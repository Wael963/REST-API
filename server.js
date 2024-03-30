const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const port = process.env.port || 8081

mongoose
    .connect(process.env.mongo_uri)
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    });

app.use(express.json())

app.use('/api', require('./routes/contact'))
app.listen(port, (err) => {
    (err) ? console.log(err) : console.log("Server is running in port :", port)
})