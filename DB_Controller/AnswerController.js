const {answer, sequelize} = require('../DB_Connection/connection')

const addAnswer = (req,res,next)=>{
    sequelize.query("INSERT INTO `Answer` (`id`, `answer_option`, `isRealAns`, `createdAt`, `updatedAt`, `question_id`) VALUES (NULL, '"+req.body.answer+"', '"+req.body.isRealAns+"', NULL, NULL, '"+req.qid+"')",{type: sequelize.QueryTypes.INSERT})
      .then((results)=>{
        res.sendStatus(201)
      })
      .catch((error)=>{
        res.sendStatus(500)
      })
}


const findCountAnswer = (req,res,next)=>{
    sequelize.query("select count(*) as cnt from Answer where question_id  ="+req.qid,{type: sequelize.QueryTypes.SELECT})
      .then((results)=>{
        res.json({
            "count":results
        })
      })
      .catch((error)=>{
        res.sendStatus(500)
      })
}


module.exports = {
    addAnswer,
    findCountAnswer
}