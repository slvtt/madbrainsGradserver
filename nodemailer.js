const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure:false,
    auth: {
        user: 'brain.block80@ethereal.email',
        pass: '8sZv3hGHg8yybQ1uCb'
    },
    tls: {
        rejectUnauthorized: false
    }
},{
    from:'sdf <brain.block80@ethereal.email>',
},)

const mailer = message => {
    transporter.sendMail(message,(err,info)=>{
        if(err) return console.log(err)
        console.log('email sent :', info)
    })
}

module.exports = mailer