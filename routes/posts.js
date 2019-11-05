const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET BACK ALL THE POST DATA
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

// SUBMIT A POST 
router.post('/', async (req,res)=>{
    console.log(req.body.title +' ' + req.body.description)
    const post = new Post({
        tite:req.body.title,
        description:req.body.description
    });
    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch(err){
        res.json({message:err})
    }
    
});
// GET SPECIFIC POST 
router.get('/:postId',(req,res)=>{
    console.log(req.params.postId)
})


module.exports = router;