const express = require('express');
const knex = require('../db/knex');
const router = express.Router({mergeParams: true});

router.route('/')

  .get((req, res) => {
    var postId = parseInt(req.params.post_id, 10);
    knex('comments').where('post_id', postId).then(results => {
      res.render('comments/index', {results: results});
    });
  })

  .post((req, res) => {

    var postId = parseInt(req.params.post_id, 10);
    req.body.comment.post_id = parseInt(req.body.comment.post_id, 10);
    req.body.comment.user_id = parseInt(req.body.comment.user_id, 10);

    knex('comments').where('post_id', postId).insert(req.body.comment)
    .then(() => {
      res.redirect(`../${req.params.post_id}/comments`);
    });
  })

router.route('/new')

  .get((req, res) => {
    var postId = parseInt(req.params.post_id, 10);
    res.render('comments/new', {id: postId});
  })

router.route('/:comment_id')

  .get((req, res) => {
    console.log('RANNNNNN');
    var commentId = parseInt(req.params.comment_id, 10);
    knex('comments').where('id', commentId).then(result => {
      res.render('comments/show', {result: result[0]});
    });
  })

  .put((req, res) => {
    console.log('OH YADFJKLHSDLKFJSD');
    var commentId = parseInt(req.params.comment_id, 10);
    knex('comments').where('id', commentId).update({content: req.body.comment.content})
    .then(() => {
      res.redirect(`../comments/${commentId}`);
      // res.redirect('/users');

    })
  })

  .delete((req, res) => {
    var commentId = parseInt(req.params.comment_id, 10);
    knex('comments').where('id', commentId).del().then(() => {
      res.redirect('/');
    })
  })

router.route('/:comment_id/edit')

  .get((req, res) => {
    var commentId = parseInt(req.params.comment_id, 10);
    res.render('comments/edit', {id: commentId});
  })

module.exports = router;
