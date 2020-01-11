const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const expressValidator = require('express-validator');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());

// mongoose.connect('mongodb://localhost:27017/greeting-app', {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Database connected successfully... ");
// }).catch(err => {
//     console.log('Failed to connect DataBase...');
//     process.exit();
// });

app.use('/', indexRouter);

module.exports = app;
