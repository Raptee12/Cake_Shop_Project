const express = require('express')
const router = express.Router()
const cakeModel = require('../models/cakeModel')

//GET ALL CAKE || @GET REQUEST
router.get('/getAllCakes', async (req,res)=>{
    try {
        const cakes = await cakeModel.find({})
        
        res.send(cakes)
    } catch (error) {
        
        res.json({message:error})
    }
})

router.post('/addcake', async (req,res)=>{
    const cake = req.body.cake
    try {
        const newCake = new cakeModel({
            name: cake.name,
            image: cake.image,
            varients:['small', 'medium', 'large'],
            description: cake.description,
            category: cake.category,
            prices: [cake.prices]
        })
        await newCake.save()
        
        res.status(201).send('New Cake Added')
        
    } catch (error) {
        
        res.json({message:error})
    }
})

router.post('/getcakebyid', async (req,res)=>{
    const cakeId = req.body.cakeId
    try {
        const cake = await cakeModel.findOne({_id:cakeId})
        
        res.send(cake)
    } catch (error) {
        
        res.json({message:error})
    }
})

router.post('/updatecake', async (req,res)=>{
    const updatedCake = req.body.updatedCake
    try {
        const cake = await cakeModel.findOne({_id:updatedCake._id})
        cake.name = updatedCake.name,
        cake.description = updatedCake.description,
        cake.image = updatedCake.image,
        cake.category = updatedCake.category,
        cake.prices = [updatedCake.prices]
        await cake.save()
        res.status(200).send('Cake Update Successful')
    } catch (error) {
        res.status(400).json({message:error})
    }
})

router.post('/deletecake', async(req,res) => {
    const cakeId = req.body.cakeId
    try {
        await cakeModel.findOneAndDelete({_id:cakeId})
        res.status(200).send('Cake Deleted')
    } catch (error) {
        res.status(404).json({message:error})
    }
})

module.exports = router