
const sgMail=require('@sendgrid/mail')// email for signup an account 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)
const sendResultEmail=(email,username,response)=>{
sgMail.send({
    to:email,
    from:'phoolan@deligence.com',
    subject:'Thanks for joining deligence :)',
    text:`welcome to the deligence, ${response},Let us know how you get along with us`
})
}

module.exports={
    sendResultEmail
}