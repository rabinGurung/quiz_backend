module.exports = (sequelize, Type) => {
    return sequelize.define('Answer', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        answer_option:{
            type:Type.STRING,
            allowNull:false,
            unique:true
        },
        isRealAns:{
            type:Type.INTEGER,
            allowNull:false
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}