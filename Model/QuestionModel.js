module.exports = (sequelize, Type) => {
    return sequelize.define('Question', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        question:{
            type:Type.STRING,
            allowNull:false
        },
        client_IP:{
          type:Type.STRING,
          allowNull:false
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}