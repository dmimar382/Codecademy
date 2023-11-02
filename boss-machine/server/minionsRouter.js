const express = require('express')
const minionsRouter = express.Router();
const db = require('./db.js')
const morgan = require('morgan')


minionsRouter.use(morgan('tiny'))

minionsRouter.param("minionId", (req, res, next, id) => {
    const minion = db.getFromDatabaseById("minions", id);
    if (!minion) {
        return res.status(404).send("Minion with the given ID was not found!");
    }
    req.minion = minion;
    next();
});


minionsRouter.get('/', (req,res,next)=>{
    var minions = db.getAllFromDatabase("minions")
    res.send(minions)
})

minionsRouter.get('/:minionId', (req,res,next)=>{     
    res.send(req.minion)
})

minionsRouter.put('/:minionId', (req,res,next)=>{
    const updatedMinion = db.updateInstanceInDatabase("minions", req.body)
    res.send(updatedMinion)
})

minionsRouter.post('/',(req,res,next)=>{
    var minion = db.addToDatabase("minions", req.body)
    res.status(201).send(minion)      
})


minionsRouter.delete('/:minionId', (req,res,next)=>{
    db.deleteFromDatabasebyId("minions", req.params.minionId)
    res.status(204).send("Delete successful")
})

module.exports = minionsRouter