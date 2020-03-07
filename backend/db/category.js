const mongoose=require('mongoose');
var catSchema = new mongoose.Schema({
    cname:{type:String,unique:true},
    image: {type:String,required:true},
    created_at:{type:Date,default:Date.now()}
  });
  
module.exports=mongoose.model('category', catSchema);
