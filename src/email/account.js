const sgMail = require('@sendgrid/mail')
const sendgridAPIKey ='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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email , name)=>{
    sgMail.send({
        to:email,
        from: 'pankhilprajapati21.4@gmail.com',
        subject: "Thanks for the joining in",
        text: `Welcome to the app,${name} .Let me know how you get along with the app `
    })
}

const sendCancelEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'pankhilprajapati21.4@gmail.com',
        subject: 'Your Cancellation for the app is done',
        text: `We are very sorry to loose you ${name}, hope we could do something better` 
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}