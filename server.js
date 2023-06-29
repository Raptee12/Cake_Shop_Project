const express = require("express")
const dotenv = require('dotenv')
const path = require('path')

const connectDB = require('./config/db')
require("colors")
const morgan = require("morgan")


//config dotenv
dotenv.config()

//connction mongodb
connectDB()

const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//route
app.use('/api/cakes', require('./routes/cakeRoute'))
app.use('/api/users', require('./routes/userRoute'))
app.use('/api/orders', require('./routes/orderRoute'))

//static files
  app.use(express.static(path.join(__dirname, './client/build')))
  app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  })

    app.get("/", (req,res) => {
        res.send('<h1> Hello from Node Server via nodemon</h1>')
    })



//port
const port = process.env.PORT || 8080

//listen port
app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})