
const yamlLoader = require('js-yaml');
const fs = require('fs');

const config = yamlLoader.safeLoad(fs.readFileSync('config.yml', 'utf8'));

// MailGun Service
const mailgun = require('mailgun-js')({apiKey: config.MAILGUN.API_KEY, domain: config.MAILGUN.DOMAIN});

//SendGrid Service
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.sendEmailMessage = function (params, callback) {
  // console.log('emailservice.params', params);

  let msg = {
    from: params.from,
    to: params.to,
    subject: params.subject,
    text: params.text,
    cc: params.cc,
    bcc: params.bcc 
  };

  consumeMailGunService(msg)
    .then( (response)=> callback(null,response))
    .catch( (error) => {
      console.log("MailGunService failed due to: ", error);

      consumeSendGridService(msg)
        .then( (response) => callback(null, response))
        .catch( (error) => {
          console.log("SendGridService failed due to: ", error);

          callback(error);
        });
    });

}

function consumeMailGunService(data) {
  return new Promise( (resolve, reject) => {
    mailgun.messages().send(data, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
}

function consumeSendGridService(data) {
  return new Promise( (resolve, reject) => {
    sgMail.send(data, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
}