const nodemailer = require('nodemailer');
module.exports.sendMail = function (service, to, from, password, subject, body) {
    const transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: from,
            pass: password
        }
    });
    const email = {
        to: to,
        from: from,
        subject: subject,
        text: body
    };
    transporter.sendMail(email);
};