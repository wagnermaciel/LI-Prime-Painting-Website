// app
const express = require('express'),
app = express();

// hbs
app.set('view engine', 'hbs');

// path
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));

// port
app.listen(3000);

// mailer
const mailer = require('./app/controller/email-sender');

// config
const config = require('./config');

// routes

// home
app.get('/', function (req, res) {
    res.render('index');
});

// contact
app.get('/contact', function (req, res) {
    res.render('contact');
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

    // send an email using the information just extracted as well as information from the config file
    mailer.sendMail(config.service, config.account, config.account, config.password, subject, body);

    res.send(response);
});

// gallery
app.get('/gallery', function (req, res) {
    res.render('gallery');
});