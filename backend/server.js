const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Route
app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.post("/api/sendemail", async (req,res)=>{

    console.log(req.body)
    const { name,email,htmlMessage } = req.body;
    

    try{
        const send_to = process.env.EMAIL_RECIEVER;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = `${name} is contacting you`;
        const message = htmlMessage;

        await sendEmail(subject,message,send_to,sent_from,reply_to)
        
        res.status(200).json({success: true, message:'Thank you, we received your email'})

    }catch(error){
        res.status(500).json(error.message);
    }
})

const PORT = process.env.PORT || 4200;
 app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}...`)
 })
