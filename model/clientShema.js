const mongoose = require('mongoose')

const clientSchema =mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number,
    }
)
const Client =mongoose.model('client',clientSchema)
module.exports = Client