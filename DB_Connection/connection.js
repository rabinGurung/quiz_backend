const Sequelize = require('sequelize')
const {database_host, database_name, database_user_name, database_user_password} = require('../utils/GLOBALS')
const QuestionModel = require('../Model/QuestionModel')
const AnswerModel = require('../Model/AnswerModel')

const sequelize =  new Sequelize(database_name,database_user_name,database_user_password,{
    host: database_host,
    dialect:'mysql'
})

const question = QuestionModel(sequelize,Sequelize)
const answer = AnswerModel(sequelize,Sequelize)
question.hasMany(answer,{foreignKey:"question_id"})
answer.belongsTo(question,{foreignKey:"question_id"})
sequelize.sync({ force: false })
.then(() => {
  console.log(`Database & tables created!`)
})
.catch(()=>{
    console.log(`Could not create table`)
})

module.exports ={
    question,
    answer,
    sequelize
}
