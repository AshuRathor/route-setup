const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors') //to fix the cors error

const mongoURI = "mongodb://127.0.0.1:27017/temp"

const connectToMongoose =()=>{
    // mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose")
    })
    // .catch(err => console.log(err))

}

connectToMongoose();

const app = express()
const port = 5000
app.use(cors()) //to fix the cors error

app.use(express.json())  //to use app.json and rend the request we have to use this as middle

//available routes: with the help of app.use will link the routes

app.use('/api/route_location', require('./Routes/route_file'))


app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})