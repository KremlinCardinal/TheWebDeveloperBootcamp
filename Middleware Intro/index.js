const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');
    next();
})

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Home page');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOOF WOOF!');
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});