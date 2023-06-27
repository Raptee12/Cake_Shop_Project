const mongoose = require('mongoose')
require('colors')


const connectDB = async () => {
     try {
         await mongoose.connect(process.env.MONGO_URI) 
         console.log(`Mongodb Connected ! ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`error: ${error.message}`.bgRed.white)
     }
}

module.exports = connectDB