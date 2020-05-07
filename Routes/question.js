const Router = require('express').Router()
const {addQuestion,findAllQuestion} =  require('../DB_Controller/QuestionController')
var getIP = require('ipware')().get_ip;
Router.post('/postnew',addQuestion)
Router.get('/getques',findAllQuestion)




module.exports = Router