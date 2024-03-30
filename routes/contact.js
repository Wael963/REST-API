const express = require('express')


const router = express.Router()
const contact=require("../models/contactSchema")


router.get('/',async(req, res) => {
    try {
        const contacts=await contact.find()
        res.status(200).json({msg:"Get all contact",contacts})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong12",error})
    }
})
router.delete('/delete/:idd',async(req,res) => {
    try {
        const delete_contacts=await contact.findByIdAndDelete(req.params.idd)
        res.status(200).json({msg:"contact deleted",delete_contact})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong",error})
    }
})
router.post('/post',async(req,res) => {
    try {
        const new_contacts=await contact.create(req.body)
        console.log("done")
        res.status(200).json({msg:"contact created",new_contacts})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong",error})
    }
})
module.exports = router