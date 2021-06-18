const router = require('express').Router();

const { Post } = require('../../database');

//Return all posts
router.get('/', (req, res) => {
    const posts = Post.findAll( {
      attributes: ['id', 'title', 'image', 'category', 'created_at']
    }).then(posts => res.json(posts));
});

//Find  post by id
router.get('/:id', (req, res) => {
  Post.findByPk(req.params.id)
    .then( post => {
      res.json(post);
    }).catch(err => {
      res.json({err: 'Post not found'});
    })
});

//Create new posts 
router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    content:req.body.content,
    image: req.body.image,
    category: req.body.category,
    create_at: req.body.create_at
  }).then(post => {
    res.json(post);
  }).catch(err => {
    res.json(err);
  })
});

//Update
router.patch('/:id', (req, res) =>{
  Post.update({
    title: req.body.title,
    content:req.body.content,
    image: req.body.image,
    category: req.body.category
  }, {
    where: {
      id:req.params.id
    }
  }).then(result => {
    res.json(result);
  })
})


//Delete
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ success: 'Post deleted'})
})
module.exports = router;