const express = require('express');
const app = express();

//Middlewares
app.use('/posts',()=>{
    console.log('this is a midlewaez running');
})

//ROUTES
app.get('/',(req,res)=>{
    res.send("<h1>We are on home</h1>");
//this excuting when we go to 
})

app.get("/posts", (req, res) => {
  res.send("<h1>We are on post</h1>");
  //this excuting when we go to /
});

// .post to post somthing
// .patch to updating 
// .delet to delete somthing

//HOW to we start listening to the server
app.listen(3000); 