const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) =>{

    const transporter = nodemailer.createTransport({
        service:process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized: false,
        }
    })


    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html:message
    }

    //Send Email
    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err)
        } else(
            console.log(info)
        )

    })

};

module.exports = sendEmail