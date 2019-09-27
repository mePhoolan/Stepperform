const express=require('express')


const questionRoutes=express.Router();
// const bcrypt=require('bcrypt')

const Question=require('../models/Question.js')
const User=require('../models/user.js')
const {sendResultEmail}=require('../Auth/mail')
const sgMail=require('@sendgrid/mail')


questionRoutes.route('/').get(function (req, res) {
    res.send("hello hie ")
})


questionRoutes.route('/add').post(function (req, res) {
    // console.log(response.chooseOption)
      const question=new Question({
      questions:[{
            step:req.body.step,
          question:req.body.question,
          option:req.body.option,
          chooseOption:req.body.chooseOption
  
    }]
          
      
    })   
      question.save(function(error,response){
        if(error){
          res.status(400).send('there is error')
        }
        
        else {
          console.log("this is my response",response.question)
             console.log("this is my", response)
             
             sendResultEmail(req.body.email,response.question,response.chooseOption)   
             res.status(200).send(response)          
        
        }
    
      })
})





module.exports= questionRoutes;