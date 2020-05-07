const {question,sequelize} = require('../DB_Connection/connection')

const addQuestion = (req,res)=>{
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var questionx = req.body.question
    if(questionx.charAt(questionx.length-1) !== '?'){
        questionx = questionx.concat('?')
    }
    question.create({
        question:questionx,
        client_IP:ip
    })
    .then((result)=>{
        res.sendStatus(201)
    })
    .catch((err)=>{
        res.sendStatus(500)
    })
}



const findAllQuestion  = (req,res)=>{
    sequelize.query("SELECT q.id as id,q.question as Ques, a.answer_option as Ans, a.isRealAns as isReal from Question q "+
    "left JOIN Answer a on q.id = a.question_id",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    res.json(results)
    })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const findId = (req,res,next)=>{
    var question1 = req.body.question
    if(question1.charAt(question1.length-1) !== '?'){
        question1 = question1.concat('?')
    }
    question.findOne({
        where:{
            question:question1
        }
    })
    .then((result)=>{
        console.log(result.id)
        req.qid = result.id
        next()
    })
    .catch((err)=>{
        res.sendStatus(404)
    })
}

const findOneID = (req,res,next)=>{
    var question2 = req.params.question
    if(question2.charAt(question2.length-1) !== '?'){
        question2 = question2.concat('?')
    }
    question.findOne({
        where:{
            question:question2
        }
    })
    .then((result)=>{
        console.log(result.id)
        req.qid = result.id
        next()
    })
    .catch((err)=>{
        res.sendStatus(404)
    })
}


module.exports = {
    addQuestion,
    findAllQuestion,
    findId,
    findOneID
}