'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const usersRouter = require('./routes/users');

app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'))


app.use('/users', usersRouter);




app.get('/', (req, res) => {
  res.render('statics/home');
})




app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
