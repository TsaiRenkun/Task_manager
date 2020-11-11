const sgMail = require('@sendgrid/mail')
// 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
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: "dracrogo@gmail.com",
    from: 'tsairenkun@gmail.com',
    subject: 'I hope it gets to me',
    text: "Reach me please"
})