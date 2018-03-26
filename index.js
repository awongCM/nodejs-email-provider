const express = require('express');
const bodyParser = require('body-parser');
const emailservice = require('./email-service');

const app = express();
const router = express.Router();

const from_field = 'One Heck Excited User <someone@emailprovider.com>';

router.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to our email service gateway');
});

router.post('/send-email', (req, res) => {
    
    // console.log("req.body: ", req.body);

    // parse req.body params to their relevant fields
    const to_fields = req.body.to.split(',');
    const cc_fields = req.body.cc === undefined ? "" : req.body.cc.split(',')
    const bcc_fields = req.body.bcc === undefined ? "" : req.body.bcc.split(',')
    
    let params = {
      from: from_field,
      to: to_fields,
      subject: req.body.subject,
      text: req.body.text,
      cc: cc_fields,
      bcc: bcc_fields
    };

    emailservice.sendEmailMessage(params, (err, body)=> {
      if(err) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Problem using email gateway services at this time \n');
        return;
      }

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('email sent successfully \n');
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router);

app.listen(process.env.PORT  || 3000, () => console.log('Server listening on port 3000'));

