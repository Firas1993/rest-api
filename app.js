const app = require('express');

//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home');
//this excuting when we go to /
})

app.get("/posts", (req, res) => {
  res.send("We are on post");
  //this excuting when we go to /
});

// .post to post somthing
// .patch to updating 
// .delet to delete somthing

//HOW to we start listening to the server
app.listen(3000); 