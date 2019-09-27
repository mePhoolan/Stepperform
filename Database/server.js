require('./DB')
const express=require('express')
const path=require('path');
const app=express()
const bodyparser=require('body-parser')
const cors=require('cors')

const QuestionRoute = require('./routes/Question.routes');



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',QuestionRoute)

const port = process.env.PORT || 4000;
app.listen(4000)
console.log("server is running on",+port)
