var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://jkkim74.jk3%40gmail.com:kr9352007@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"hbenicloud" <hbenicloud@gmail.com>', // sender address
    to: 's099@gsenergy.co.kr, s099@gsenergy.co.kr', // list of receivers
    subject: 'node 메일 테스트', // Subject line
    text: 'node 메일 테스트', // plaintext body
    html: '<b>node 메일 테스트</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('발송확인: ' + info.response);
});