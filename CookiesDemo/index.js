const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there ${name}`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'Henrietta');
    res.cookie('animal', 'Harlequin Shrimp');
    res.send('Ok, send you a cookie!');
});

app.listen(3000, () => {
    console.log('Serving app on port 3000');
});