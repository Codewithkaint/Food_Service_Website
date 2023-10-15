const express=require('express')
 const path=require('path')

require("./db/conn")
const Register=require('./models/register')

 const app=express()
 let htmlPath=path.join(__dirname,'../public')
 let templatePath=path.join(__dirname,'/template/views')
 
 app.use(express.json())

 app.use(express.urlencoded({extended:false}))
 app.set('view engine','hbs')
 app.set('views',templatePath)
app.use(express.static(htmlPath))
 
 app.get('/',(req,res)=>{
 res.render('index')}
 )
 app.get('/feedback',(req,res)=>{
 res.render('feedback')}
 )
 app.get('/login',(req,res)=>{
 res.render('login')}
 )

 
 app.post('/order',async(req,res)=>{
try{
const customer=new Register({
fname:req.body.fname,
number:req.body.number,
order:req.body.order,
address:req.body.address
})
const orders=await customer.save();

   

} catch(error){
    res.send(400).send(error)
    console.log(error.message)
}
}

 )
 app.get('*',(req,res)=>
 res.render('404',{
     mess:'Oops!,Page Not Found'
 })
 )


app.listen(8000,()=>{
    console.log('LISTENING AT 8000')
})


