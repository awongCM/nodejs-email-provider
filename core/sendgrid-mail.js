// SendGrid Service
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmailAsync = function (data) {
  console.log('sendgrid-mail data: ' + JSON.stringify(data));

  return new Promise((resolve, reject)=> {
    sgMail.send(data, (err, body) =>{
      if(err) { console.log('sendgrid-mail err: '+err); return reject(err);}
      console.log('Message sent: ', body);
      resolve(body);
    });
  });
}
