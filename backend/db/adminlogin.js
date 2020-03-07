const mongoose=require('mongoose');
var adminSchema = new mongoose.Schema({
    email:{type:String,unique:true},
    password: {type:String,required:true},
    created_at:{type:Date,default:Date.now()}
  });
  
module.exports=mongoose.model('admin', adminSchema);
