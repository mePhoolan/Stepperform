var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
        questions:[{
            step:{
                type:Number,
            },
            "question":{
                type:String,
            },
            "option":[{
                type:String,
             }],
             "chooseOption":{
                "type":String
            }
        }]
           
        

// Questions:[{
//      step:{
//          type:Number
//      },
//     questions:{
//    type:String
//     },
//     options:[{
//    type:String
//     }],

//     chooseOption:{
//     type:String
//     },
// }],
//     email:{
//         type:String
// }
        
        
},
{timestamps:true
})

var Question=mongoose.model('question', QuestionSchema) 

module.exports=Question


