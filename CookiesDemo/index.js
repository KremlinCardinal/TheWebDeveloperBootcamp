const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('hey there');
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'Henrietta');
    res.cookie('animal', 'Harlequin Shrimp');
    res.send('Ok, send you a cookie!');
});

app.listen(3000, () => {
    console.log('Serving app on port 3000');
});