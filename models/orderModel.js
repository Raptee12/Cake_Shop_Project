const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name :{
        type:String,
        required: [true,'order name is required']
    },
    email :{
        type:String,
        required: [true,'email is required']
    },
    userid:{
        type:String,
        required:true
    },
    orderItems:[],
    shippingAddress:{
        type:Object,
    },
    orderAmount:{
        type:String,
        //required:true
    },
    isDelivered:{
        type:Boolean,
        default:false
       // required:true
    },
    transactionId:{
        type:String,
       // required:true
    },

},{timestamps:true})

module.exports = mongoose.model('order',orderSchema)