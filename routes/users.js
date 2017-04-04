const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.route('/')

  .get((req, res) => {
    knex.select().from('users').then(results => {
      res.render('users/index', {results: results});
    });
  })

router.route('/new')

  .get((req, res) => {
    res.render('users/new');
  })

router.route('/:user_id')

  .get((req, res) => {
    var userId = parseInt(req.params.user_id, 10);
    knex('users').where('id', userId).then(result => {
      res.render('users/show', {result: result[0]});
    });
  })

  .put((req, res) => {
    console.log('U GOT AEEEEN');
    var userId = parseInt(req.params.user_id, 10);
    knex('users').where('id', userId).update(req.body.user)
    .returning('id')
    .then(id => {
      console.log(id);
      res.redirect(`../users/${id}`);
    });
  })

  .delete((req, res) => {
    var userId = parseInt(req.params.user_id, 10);
    knex('users').where('id', userId).del().then(() => {
      res.redirect('/users');
    })
  })


router.route('/:user_id/edit')

  .get((req, res) => {
    var userId = parseInt(req.params.user_id, 10);
    res.render('users/edit', {id: userId});
  })

module.exports = router;
