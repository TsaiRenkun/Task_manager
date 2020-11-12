const sgMail = require('@sendgrid/mail')
// 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
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)


const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from: 'tsairenkun@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const cancellationFeedback = (email, name)=>{
    sgMail.send({
        to:email,
        from: 'tsairenkun@gmail.com',
        subject: "Your feedback is apperciated",
        text: `Do let us know how we could have kept you on the app ${name}, Thank you`
    })
}

// sgMail.send({
//     to: "dracrogo@gmail.com",
//     from: 'tsairenkun@gmail.com',
//     subject: 'I hope it gets to me',
//     text: "Reach me please"
// })

module.exports = {
    sendWelcomeEmail,
    cancellationFeedback
}