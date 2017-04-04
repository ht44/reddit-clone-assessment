const express = require('express');
const knex = require('../db/knex');
const router = express.Router({mergeParams: true});


router.route('/')

  .get((req, res) => {
    knex.select().from('posts').then(results => {
      res.render('posts/index', {results: results});
    });
  })

  .post((req, res) => {
    knex('posts').insert(req.body.post)
    .returning('id')
    .then(id => {
      res.redirect(`posts/${id}`);
    });
  })

router.route('/new')

  .get((req, res) => {
    var userId = parseInt(req.params.user_id, 10);
    res.render('posts/new', {id: userId})
  })

router.route('/:post_id')

  .get((req, res) => {
    var postId = parseInt(req.params.post_id, 10);
    knex('posts').where('id', postId).then(result => {
      res.render('posts/show', {result: result[0]});
    });
  })

  .put((req, res) => {
    var postId = parseInt(req.params.post_id, 10);
    knex('posts').where('id', postId).update(req.body.post).then(() => {
      res.redirect(`../posts/${postId}`);
    });
  })

  .delete((req, res) => {
    var postId = parseInt(req.params.post_id, 10);
    knex('posts').where('id', postId).del().then(() => {
      res.redirect('../posts');
    });
  })



router.route('/:post_id/edit')

  .get((req, res) => {
    console.log('WE IN');
    var postId = parseInt(req.params.post_id, 10);
    res.render('posts/edit', {id: postId});
  })


module.exports = router;
