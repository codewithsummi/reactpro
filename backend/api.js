const express=require('express');
const app=express();
//cors  and parse data
const cors=require('cors');
const bodyParser=require('body-parser');
const fs=require('fs');
const sha1=require('sha1');
app.use(cors())
app.use(bodyParser.json());
app.use('/api',express.static('attach'))
//for attachment
let multer=require('multer');
let DIR="./attach";
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,DIR)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  })
  
  let upload = multer({ storage: storage }).single('attach');
//end
//app.use(bodyParser.urlencoded({ extended: false }));
//end cors and parse data 
//connection with mongodb 
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/eshopping', {useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true},()=>
{
    console.log("Connect to Mongodb")
});
let adminModel=require('./db/adminlogin');
let catModel=require('./db/category');
app.post('/api/adminlogin',(req,res)=>
{
    let email=req.body.email;
    let pass=sha1(req.body.password);
    // let ins=new adminModel({'email':email,'password':pass});
    // ins.save(err=>
    //     {
    //         if(err){
    //             res.json({'err':1,'msg':'Data not Saved'})
    //         }
    //         else 
    //         {
    //             res.json({'err':0,'msg':'Data Saved'})
    //         }
    //     })
    adminModel.findOne({'email':email,'password':pass},(err,data)=>
    {
        if(err)
        {
            console.log(err)
        }
        else if(data==null)
        {
            res.json({'err':1,'msg':'Email or password is not correct'})
        }
        else
        {
            res.json({'err':0,'msg':'Login Success','uid':email})
        }
    })
})
app.post('/api/changepassword',(req,res)=>
{

    let op=sha1(req.body.op);
    let np=sha1(req.body.np);
    let cp=sha1(req.body.cp);
    let uid=req.body.uid;
    if(np==cp)
    {
        adminModel.findOne({email:uid},(err,data)=>
        {
            if(err){}
            else 
            {
                if(op==data.password)
                {
                    if(op==cp)
                    {
                        res.json({'err':1,'msg':'Op and Np is not same'});
                    }
                    else 
                    {
                        adminModel.updateOne({email:uid},{$set:{password:np}},(err)=>
                        {
                            if(err){}
                            else 
                            {
                                res.json({'err':0,'msg':'Password Changed Successfully'});
                            }
                        })
                    }
                }
                else 
                {
                    res.json({'err':1,'msg':'Op is not correct'});     
                }
            }
        })
    }
    else 
    {
        res.json({'err':1,'msg':'Op and cp is not match'});
    }
})
app.post('/api/addcategory',(req,res)=>
{
    upload(req,res,(err)=>
    {
        if(err){
            res.json({'err':1,'msg':'Uploading Error'})
        }
        else
        {
           let cname=req.body.cname;
           let fname=req.file.filename;
           let ins=new catModel({'cname':cname,'image':fname});
           ins.save(err=>
            {
                if(err){
                  fs.unlink('./attach/'+fname,(err)=>
                  {
                      if(err){}
                      else 
                      {
                        res.json({'err':1,'msg':'Category Exits'})
                      }
                  })
                }
                else 
                {
                    res.json({'err':0,'msg':'Category Saved'})
                }
            })

        }
    })
})
app.get('/api/getcategory/:id?',(req,res)=>
{
    let cid=req.params.id;
    if(cid)
    {
        catModel.findOne({_id:cid},(err,data)=>
    {
        if(err){}
        else 
        {
            res.json({'err':0,'cdata':data});
        }
    })
    }
    else 
    {
    catModel.find({},(err,data)=>
    {
        if(err){}
        else 
        {
            res.json({'err':0,'cdata':data});
        }
    })
   }
})
app.get('/api/delcat/:id',(req,res)=>
{
    let id=req.params.id;
    catModel.deleteOne({_id:id},(err)=>
    {
        if(err){}
        else 
        {
            res.json({'err':0,'msg':'Category Deleted'})
        }
    })
})
app.post('/api/upcategory',(req,res)=>
{})
app.post('/api/upcategorywithoutimage',(req,res)=>
{
    let cname=req.body.cname;
    let cid=req.body.cid;
    catModel.updateOne({_id:cid},{$set:{cname:cname}},(err)=>
    {
        if(err){}
        else 
        {
            res.json({'err':0,'msg':'Category Updated'})
        }
    })
})
app.get('/api/fetchproductbycname/:cn',(req,res)=>
{
    let cname=req.params.cn;
    proModel.find({cname:cname},(err,data)=>
    {
        if(err){}
        else 
        {
            res.json({'err':0,'pdata':data});
        }
    })
})
app.listen(8899,()=>
{
    console.log("Work on 8899");
})