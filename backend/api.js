const express=require('express');
const app=express();
//cors  and parse data
const cors=require('cors');
const bodyParser=require('body-parser');
const sha1=require('sha1');
app.use(cors())
app.use(bodyParser.json());
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
app.listen(8899,()=>
{
    console.log("Work on 8899");
})