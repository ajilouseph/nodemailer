const nodemailer = require("nodemailer");
const {EMAIL,PASSWORD} = require('./env.js')

const signup = (req,res) => {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL,
        pass: PASSWORD
      }
    });
    
    var mailOptions = {
      from: 'ajilouseph123@gmail.com',
      to: 'ajilouseph2015@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'This is the email sent for learning'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
}


module.exports = {
    signup
}
// ashin209@gmail.com