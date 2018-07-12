const express = require('express'),
app = express();

app.set('view engine', 'hbs');

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));

const mailer = require('./app/controller/email-sender');

const config = require('./config');

app.get('/', function (req, res) {
    res.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.post('/api/contact', function (req, res) {
    // extract subject and body from the query
    const data = JSON.parse(req.query.data);
    const subject = data.subject;
    const body = data.body;
    // validate the information passed in
    const response = JSON.stringify({
        "success": true
    });
    // send an email
    mailer.sendMail(config.service, config.account, config.account, config.password, subject, body);
    res.send(response);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('\x1b[36m', 'Listening at port', port, '\x1b[0m');
});
