module.exports = function(params) {
  const to_fields = params.to,
        cc_fields = params.cc,
        bcc_fields = params.bcc,
        subject_field = params.subject,
        text_field = params.text;
  
  // validate the following required fields 
  if(validateEmail(to_fields) && validateSubject(subject_field) && validateText(text_field)){
    return true;
  } else {
    return false;
  }

};

function validateEmail(emailList) {
  for (let index = 0; index < emailList.length; index++) {
    const email = emailList[index];
    if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return false;
    }
  }
  return true;
}

function validateSubject(subject) {
  return subject.match(/([^\s])/i);
}

function validateText(text) {
  return text.match(/([^\s])/i);
}