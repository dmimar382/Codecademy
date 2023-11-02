const express = require('express')
const ideasRouter = express.Router();
const db = require('./db.js')
const morgan = require('morgan')
var checkMillionDollarIdea = require('./checkMillionDollarIdea.js')


ideasRouter.use(morgan('tiny'))

ideasRouter.param("ideaId", (req, res, next, id) => {
    const idea = db.getFromDatabaseById("ideas", id);
    if (!idea) {
        return res.status(404).send("idea with the given ID was not found!");
    }
    req.idea = idea;
    next();
});


ideasRouter.get('/', (req,res,next)=>{
    var ideas = db.getAllFromDatabase("ideas")
    
    res.send(ideas)
})

ideasRouter.get('/:ideaId', (req,res,next)=>{     
    res.send(req.idea)
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req,res,next)=>{
    const updatedidea = db.updateInstanceInDatabase("ideas", req.body)
    res.send(updatedidea)
})

ideasRouter.post('/',checkMillionDollarIdea, (req,res,next)=>{
   
    var idea = db.addToDatabase("ideas", req.body)
    res.status(201).send(idea)      
})


ideasRouter.delete('/:ideaId', (req,res,next)=>{
    db.deleteFromDatabasebyId("ideas", req.params.ideaId)
    res.status(204).send("Delete successful")
})

module.exports = ideasRouter