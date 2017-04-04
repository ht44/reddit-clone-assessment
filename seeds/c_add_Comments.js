
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: 'weak', user_id: 1, post_id: 1},
        {content: 'i like it', user_id: 1, post_id: 2},
        {content: 'could be better', user_id: 2, post_id: 1},
        {content: 'this is unnacceptable', user_id: 3, post_id: 2},
        {content: 'so bored rn', user_id: 3, post_id: 3},
        {content: 'any1 wanna hangout?', user_id: 3, post_id: 4}
      ]);
    });
};
