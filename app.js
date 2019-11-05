const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemon = require('nodemon');
require("dotenv/config");


const bodyParser = require("body-parser");

app.use(bodyParser.json());

//ROUTES
app.get('/',(req,res)=>{
    res.send("<h1>We are on home</h1>");
//this excuting when we go to 
})


// .post to post somthing
// .patch to updating 
// .delet to delete somthing

//HOW to we start listening to the server
app.listen(3000); 

// connstct to database
mongoose.connect(
  process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.warn("connected to db");
});

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute)