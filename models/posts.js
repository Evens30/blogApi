module.exports =  (sequelize, type) => {
     return sequelize.define('post', {
       id:{
         type: type.INTEGER,
         primaryKey: true,
         autoIncrement : true
       },
       title: type.STRING,
       content: type.STRING,
       image: type.BLOB,
       category: type.STRING,
       created_at: {
         type: 'TIMESTAMP',
         defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull: false
       }
     })
      
       
     
}