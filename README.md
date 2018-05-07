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

## TODO
Remember to switch off SendGrid/MailGun accounts after leaving API online service running for too long.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/awongCM/post-it-notes-board-react/blob/master/LICENSE) file for details