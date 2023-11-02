const express = require('express');
const app = express();
const morgan = require('morgan')

const { envelopes } = require('./data')
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(morgan('tiny'))
app.use(express.json());

app.listen(PORT);

const {generateUniqueID} = require("./helper.js")


const { Pool } = require('pg');

const pool = new Pool({
  user: 'envelope_db_9hb6_user',
  host: 'dpg-cktgkplk4k9c73bj33vg-a',
  database: 'envelope_db_9hb6', // Replace with your database name
  password: 'Ppr4R0YhYIdkpXNEuDQzqf66kcBkP5Nk',
  port: 5432, // Default PostgreSQL port
});

app.get('/api/envelopes', async(req,res,next)=>{
    try{
        const client = await pool.connect();
        const result = await client.query(
            'SELECT * FROM envelopes'
        );
        client.release();
        res.status(200).json(result.rows);

    }
    catch (error) {
        console.error('Error retrieving data from the database', error);
        res.status(500).send('Internal Server Error');
      }
    

})


app.post('/api/envelopes', async(req,res,next)=>{
    const name = req.query.name;
    const balance = req.query.balance;
    const ID = generateUniqueID();
    
    if(!name || !balance){
        
        res.status(400).send('Both fields are required')
    }
    else{
        try{
            const client = await pool.connect();
            const result = await client.query(
                'INSERT INTO envelopes (id, name, balance) VALUES ($1,$2,$3)', [ID, name, Number(balance)]

            );
            client.release();
            res.status(201).send(envelopes);
        }
        catch (error){
            console.error('Error inserting dats into the database', error);
            res.status(500).send('Internal Server Error')
        }
    //     var object = {
    //         'ID': ID, 
    //         'name': name, 
    //         'balance': Number(balance)
    //     }
    //     envelopes.push(object)
    //     // console.log(object)
    //     res.status(201).send(envelopes)
    }
})

app.put('/api/envelopes',async(req,res,next) =>{
    const name = req.query.name;
    const amount = req.query.amount;

    // console.log(name, amount)

    if(!name || !amount){
        
        res.status(400).send('Both fields are required')
    }
    else if(amount < 0){
        res.status(400).send("Invalid input")
    }
    else{
        try{
            const client = await pool.connect();
            const result = await client.query(
                'UPDATE envelopes SET balance = balance - $1 WHERE name = $2', [Number(amount), name]

            );
            client.release();
            res.status(201).send(envelopes);
        }
        catch (error){
            console.error('Error updating data in the database', error);
            res.status(500).send('Internal Server Error')
        }





        // var updated = updateSpendAmount(name, amount)
        // if(updated === -1)
        // {
        //     res.status(400).send("Entered amount is more than available balance")
        // }
        // res.status(201).send(updated)
    }
})

app.delete('/api/envelopes', async(req,res,next)=>{
    const name = req.query.name;
    if(!name){
        res.status(400).send('Envelope field is required')
    }
    else{
        try{
            const client = await pool.connect();
            const result = await client.query(
                'DELETE FROM envelopes  WHERE name = $1', [name]

            );
            if (result.rowCount === 0) {
                res.status(404).send('Envelope not found');
            }
            else{
                res.status(200).send(envelopes);
                // res.status(200).send('Deleted successfully');
            }
            client.release();
            
        }
        catch (error){
            console.error('Error deleting data in the database', error);
            res.status(500).send('Internal Server Error')
        }



        // var deleted = deleteEnvelope(name)
        // res.send(deleted)
        
    }
})

