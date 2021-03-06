const nodemailer = require('nodemailer');
const settings = require('../config/mail.json');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(settings);

// setup email data with unicode symbols
// let mailOptions = {
//   from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
//   to: 'antonakimov515@gmail.com', // list of receivers
//   subject: 'Hello ✔', // Subject line
//   text: 'Hello world ?', // plain text body
//   html: '<b>Hello world ?</b>' // html body
// };



export function sendMail(options) {
  // send mail with defined transport object
  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
