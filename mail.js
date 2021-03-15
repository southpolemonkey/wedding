const nodemailer = require('nodemailer');
// const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '/../config/config.json'))[env];

module.exports = (data) => {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 587,
           secure: false, // true for 465, false for other ports
           auth: {
               ACCOUNT_USERNAME, 
               pass: ACCOUNT_PASSWORD  
           }
       });
   
       // setup email data with unicode symbols
       let mailOptions = {
           from: 'fsmaxbot@gmail.com', // sender address
           to: data.to, // list of receivers
           subject: data.subject, // Subject line
           text: data.text, // plain text body
           html: data.html // html body
       };
   
       // send mail with defined transport object
       transporter.sendMail(mailOptions, (error, info) => {
           error ? console.error(error) : console.log('Message Sent.')
       });
   })
}