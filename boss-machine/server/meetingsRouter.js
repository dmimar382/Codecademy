const express = require('express')
const meetingsRouter = express.Router();
const db = require('./db.js')
const morgan = require('morgan')


meetingsRouter.use(morgan('tiny'))


meetingsRouter.get('/', (req,res,next)=>{
    var meetings = db.getAllFromDatabase("meetings")
    res.send(meetings)
})

meetingsRouter.post('/',(req,res,next)=>{
    
    var meeting = db.addToDatabase("meetings", db.createMeeting())
    res.status(201).send(meeting)      
})

meetingsRouter.delete('/', (req,res,next)=>{
    db.deleteAllFromDatabase("meetings")
    res.status(204).send("Delete successful")
})

module.exports = meetingsRouter