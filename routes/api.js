const router  = require('express').Router();

const apiPostsRouter = require('./api/posts');

router.use('/posts',apiPostsRouter);

module.exports = router;