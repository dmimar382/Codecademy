const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT);

app.get('/api/quotes/random',(req,res,next) => {
    var element = getRandomElement(quotes)
    console.log(element)

    res.status(200).json(element)
})

app.get('/api/quotes',(req,res,next) => {
    var person = req.query.person
    if(person != null){
        const filteredQuotes = quotes.filter(quote => quote.person === person);
        // console.log(filteredQuotes);
        res.status(200).json(filteredQuotes)


    }else{
        res.status(200).json(quotes)
    }
    
})

app.post('/api/quotes', (req,res,next)=>{
    var quote = req.query.quote
    var person = req.query.person

    if(!quote || !person){
        res.status(400).send('Both fields are required')
    }
    else{
        var object = {
            'quote': quote, 
            'person': person
        }
        quotes.push(object)
        console.log(object)
        // console.log(quotes)
        res.status(201).send(object)
    }
})

app.put('/api/quotes', (req,res,next)=>{
    var quoteID = req.query.quoteID
    var quote = req.query.quote
    var person = req.query.person
    console.log(quoteID, quote, person)

    if(!quote || !person || !quoteID){
        res.status(400).send('All fields are required')
    }
    else{
        var object = {
            'quoteID' : quoteID,
            'quote': quote, 
            'person': person
        }
        const quoteExists = quotes.some(quote => {
            if(quote.quoteID === Number(quoteID))
                return true;
            else
                return false;
        });
        // console.log(quoteExists)
        if(quoteExists){
            quotes[quoteID-1].quote = quote
            quotes[quoteID-1].person = person
            res.status(201).send(object)
        }
        else{
            res.status(404).send('Quote not found')
        }
    }
})

