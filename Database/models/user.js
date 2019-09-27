var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    questions:[{
           questions:{
               type:String
           },
           chooseOption:{
             type:String
           },
        type:mongoose.Schema.Types.ObjectId,
         ref: 'question' ,
     answer:{
       type:String
     }
}],
    email:{
   type:String
    },
  companyname:{
      type:String,
  },

contactname:{
    type:String
},

},
{timestamps:true
})

var User=mongoose.model('user', UserSchema) 

module.exports=User


