const Sequelize = require('sequelize');

const PostModel =require('./models/posts');

const  sequelize  = new Sequelize('pVcSIDdssE', 'pVcSIDdssE', 'UVQxLV3KIb', {
  host: 'remotemysql.com',
  dialect: 'mysql'
});

const Post = PostModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('syncronized Tables ')
})

module.exports = {
  Post
}