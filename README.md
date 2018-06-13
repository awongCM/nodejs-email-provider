# NODEJS EMAIL PROVIDER

EMAIL PROVIDER SERVICE USING NODEJS

## Ingredients used

* NodeJS (static web server for Heroku)
* ExpressJS
* Promises/Callbacks
* NPM
* MailGun Service
* SendGrid Service

## Installation Process
1. Download the zipped file
2. Run `npm install`
3. Run `npm start` or `yarn start`
4. Use POSTMAN client to nagivate to  main endpoint: `http://localhost:7000/api/`

##Heroku Deployment
Main URL endpoint: `https://mysterious-shore-61618.herokuapp.com/api`
or to post email: `https://mysterious-shore-61618.herokuapp.com/api/send-email`

## Usage
To use the email service provider, use `send-email` endpoint; use `POST` method, and provide the following body
paramaeters:

1. `to` fields in comma separated values
2. `subject` field
2. `text` field
2. `cc` fields in comma separated values
2. `bcc` fields in comma separated values
