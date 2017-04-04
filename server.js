'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'))


app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/users/:user_id/posts', postsRouter);
app.use('/users/:user_id/comments', commentsRouter);
app.use('/comments', commentsRouter);
app.use('/posts/:post_id/comments', commentsRouter);



app.get('/', (req, res) => {
  res.render('statics/home');
})




app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
