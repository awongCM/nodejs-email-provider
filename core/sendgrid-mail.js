// TODO - to be removed, replaced with more secure API call
const yamlLoader = require('js-yaml');
const fs = require('fs');
const config = yamlLoader.safeLoad(fs.readFileSync('config.yml', 'utf8'));

// SendGrid Service
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(config.SENDGRID.API_KEY);

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
