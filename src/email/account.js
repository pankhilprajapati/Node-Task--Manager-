const sgMail = require('@sendgrid/mail')
const sendgridAPIKey ='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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'pankhilprajapati21.4@gmail.com',
    from:'pankhilprajapati21.4@gmail.com',
    subject:'This is my first creation',
    text: "I hope this one actually get to you"
})