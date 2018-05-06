const yamlLoader = require('js-yaml');
const fs = require('fs');
const config = yamlLoader.safeLoad(fs.readFileSync('config.yml', 'utf8'));

// MailGun Service
const mailgun = require('mailgun-js')({apiKey: config.MAILGUN.API_KEY, domain: config.MAILGUN.DOMAIN});

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