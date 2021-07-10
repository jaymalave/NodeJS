const express = require('express')
const router = express.Router();
const Post = require('../models/Post')
const bodyParser = require('body-parser')
const cors = require('cors')

router.use(cors())
router.use(bodyParser.json())

router.get('/', (req, res) => {
      res.send("We are on posts")
})


//get a specific post 
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err){
        res.send('Error!')
    }
})

//create a new post
router.post('/', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
    console.log(req.body) 
})

router.delete('/:postId', async (req, res) => {
    try {
      const removedPost = await Post.remove({_id: req.params.postId})
      res.json(removedPost)
    }catch(err){
       res.send(err)
    }
})


module.exports = router