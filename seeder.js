const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./config/db')
const Cake = require('./models/cakeModel')
const Cakes = require('./data/cake-data')

//config dot env and mongodb conn file
dotenv.config()
connectDb()

//import data
const importData = async () => {
    try {
        await Cake.deleteMany()
        const sampleData = Cakes.map((cake) => {return{...cake}})
        await Cake.insertMany(sampleData)
        console.log('DATA IMPORTED'.bgGreen.white)
        process.exit()
    } catch (error) {
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy = () => {}

if(process.argv[2] === '-d'){
    dataDestroy()
}else{
    importData()
}