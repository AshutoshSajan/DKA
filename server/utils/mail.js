"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
exports.mail = async function(email, token){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: 'gmail',
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      password: process.env.PASSWORD // generated ethereal password
    }
  });

  var html =
  `<h2> welcome to Dhauladhar Accademy</h2>
   <p> please click on the link below to varify your account<p>
   <a href='http://localhost:3000/api/v1/users/verify-account/${ token }/${ email }' > Click to Varify </a>
    `;
    console.log(process.env.EMAIL, process.env.PASSWORD, "mail pass"); 
    console.log(email, token, html, "inside mailer");

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Dhauladhar karate academy <${ process.env.EMAIL }>`, // sender address
    to: email, // list of receivers
    subject: "Verify account", // Subject line
    text: "Hello sir. you are registerd succesefully to Dhauladhar karate academy so please verify your acount by clicking the link below to confirm that its you.", // plain text body
    html: html // html body
  },
  function(err, res){
    if(err){
      console.log(err, "mail sent error");
    }else{
      console.log("Message sent: " + res.message);
    }
    transporter.close();
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}