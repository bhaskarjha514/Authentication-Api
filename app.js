const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');


const app = express();

const db = require('./config/db').database;
mongoose.connect(db, {useNewUrlParser:true})
        .then(()=>{
            console.log('Database connected succesfully')
        })
        .catch((err)=>{
            console.log("Unable to connect database",err)
        });

const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res)=>{
   res.send("Homepage");
});
const userRoutes = require('./routes/api/user');
app.use('/api/user',userRoutes);
app.listen(port);


