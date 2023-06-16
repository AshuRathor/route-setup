const mongoose = require('mongoose');
const { Schema } = mongoose

const routeSchema = new Schema({
    name:{
        type:"String",
        require:true
    },
    rollno:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model("route_location", routeSchema)