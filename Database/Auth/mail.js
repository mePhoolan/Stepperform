require('dotenv').config()
const sgMail=require('@sendgrid/mail')// email for signup an account 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)
const sendResultEmail=(email,question,chooseOption)=>{
sgMail.send({
    to:email,
    from:'phoolan@deligence.com',
    subject:'Thanks for joining deligence :)',
    text:`your result is here Questions <${question}>and your answers,<${chooseOption}>Let us know how you get along with us`
}).then(()=>{
console.log(email);
}).catch((error) => {
    console.log('error', error);

})
}

module.exports={
    sendResultEmail
}