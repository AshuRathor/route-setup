const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors') //to fix the cors error, use to connect backend with frontend

const mongoURI = "mongodb://127.0.0.1:27017/temp" // mongodb uri, runs temparorily in the system

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
app.use(cors())

app.use(express.json())  //to use app.json and send the request we have to use this as middle

//available routes: with the help of app.use will link the routes

app.use('/api/route_location', require('./Routes/route_file'))
// /api/route_location is the backend address
// ./Routes/route_file is the file location


app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})