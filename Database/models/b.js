
          questions:[{
            "question":req.body.question,
            options:req.body.options,
            chooseOption:req.body.chooseOption
             }],
           

              //  userId:[{ 
    //     type:mongoose.Schema.Types.ObjectId,
    //      ref:'user'
    //       }],

    "questions": [
        {
              
            "question": {
                type:String,
            },
            "options":[{
                type:String,
             }],
             "chooseOption":{
                "type":String
            }
       
        }]
       
},  

{timestamps:true
})
