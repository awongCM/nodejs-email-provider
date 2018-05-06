// Import the core email service providers
const mailgun = require('../core/mail-gun');
const sendgridmail = require('../core/sendgrid-mail');

exports.sendEmailMessage = function(params, callback){
  // console.log('emailservice.params', params);

  let msg = {
    from: params.from,
    to: params.to,
    subject: params.subject,
    text: params.text,
    cc: params.cc,
    bcc: params.bcc 
  };

  // Simple failover strategy
  mailgun.sendEmailAsync(msg)
    .then( (res) =>callback(null, res))
    .catch( (err) => {
      console.log("MailGunService failed due to: ", error);

      sendgridmail.sendEmailAsync(msg)
        .then( (res) =>callback(null, res))
        .catch( (err) => {
          console.log("SendGridService failed due to: ", error);

          callback(err);
        });
  });
}
