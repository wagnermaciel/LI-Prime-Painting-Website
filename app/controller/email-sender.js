const nodemailer = require('nodemailer');
/**
 * Sends an email using the given service from the given from email
 * address to the given to email address with the given subject and
 * with the given body.
 * 
 * This method constructs a new transporter using the nodemailer
 * module with the specified from email address and password. It
 * then constructs an email object whose properties are to, from,
 * subject, and text. The values of these properties are the given
 * to, from, subject, and body. Finally, it uses the transporter to
 * send the email.
 * 
 * @param {String} service The email service provider of the from
 *                 email address
 * @param {String} to The account the email will be sent to
 * @param {String} from The account the email will be sent from
 * @param {String} password The password of from email address
 * @param {String} subject The the subject of the email
 * @param {String} body The body of the email
 */
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