const express = require('express');
const router = express.Router();
const emailservice = require('../services/email-service');
const validateParams = require('../helpers/params-validations');

const yamlLoader = require('js-yaml');
const fs = require('fs');
const config = yamlLoader.safeLoad(fs.readFileSync('config.yml', 'utf8'));

const from_field = [config.SENDER.NAME, config.SENDER.EMAIL].join(' ');

router.get('/', (req, res, next) => {
  res.status(200).json({message: "Welcome to our email service gateway"});
});

router.post('/send-email', (req, res, next) => {
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

    if(!validateParams(params)) {
      res.status(400).json({message:"Cannot send email at this time due to bad email validations"});
    } else {
      emailservice.sendEmailMessage(params, (err, body)=> {
      if(err) {        
        console.log('routes err: '+err);
        res.status(400).json({message:"Problem using email gateway service at this time"});
      } 

      res.status(200).json({message:"Email successfully sent"});
      
      });
    }
});

module.exports = router;