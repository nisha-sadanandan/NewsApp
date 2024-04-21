import express from 'express'
import cors from 'cors'
import User from './model/userModel.js'

const app=express()

app.use(express.json())
app.use(cors())

app.post('/signup',(req,res)=>{

    var userItem={
      name :req.body.name,
      email :req.body.email,
      username :req.body.username,
      password : req.body.password

}
 var user = new User(userItem)
 user.save()
res.status(200).send(userItem)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})