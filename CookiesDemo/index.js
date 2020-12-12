const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there ${name}`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'Henrietta');
    res.cookie('animal', 'Harlequin Shrimp');
    res.send('Ok, send you a cookie!');
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('ok signed your fruit cookie');
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.cookies);
});

app.listen(3000, () => {
    console.log('Serving app on port 3000');
});