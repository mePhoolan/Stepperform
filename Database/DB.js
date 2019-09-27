var mongoose=require("mongoose");

var url='mongodb://localhost:27017/Questions'
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex: true,useFindAndModify: false,useUnifiedTopology: true},function(err,database){
    
       if(err){
           console.log("database is not connected")
       }
       else{
           console.log("database is connected")
       }

    })
