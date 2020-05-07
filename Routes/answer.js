const Router = require('express').Router()
const {addAnswer, findCountAnswer} =  require('../DB_Controller/AnswerController')
const {findId,findOneID} = require('../DB_Controller/QuestionController')
Router.post('/postans',findId,addAnswer)

Router.get('/getCountAns/:question',findOneID,findCountAnswer)





module.exports = Router