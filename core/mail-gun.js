// MailGun Service
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

exports.sendEmailAsync = function (data) {
  console.log('mail-gun data: ' + JSON.stringify(data));

  return new Promise((resolve, reject)=> {
    mailgun.messages().send(data, (err, body) =>{
      if(err) { console.log('mail-gun err: '+err); return reject(err);}
      console.log('Message sent: ', body);
      resolve(body);
    });
  });
}