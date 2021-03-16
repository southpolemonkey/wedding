require("dotenv").config();

const nodemailer = require("nodemailer");
// const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '/../config/config.json'))[env];

module.exports = (data) => {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${process.env.MAILER_ACCOUNT}`,
        pass: `${process.env.MAILER_PASSWORD}`
      },
    });

    // transporter.verify(function(error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });

    // setup email data with unicode symbols
    let mailOptions = {
      from: `${process.env.MAILER_SENDER}`,
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.html, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      error ? console.error(error) : console.log("Message Sent.");
    });
  });
};
