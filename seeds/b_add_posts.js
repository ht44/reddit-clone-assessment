
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'List of Things', content: 'Have you seen this list? You gotta check it CLICK HERE', user_id: 1},
        {title: 'Top 10 Cats', content: 'These are the best cats around no questions..', user_id: 1},
        {title: 'We are Galvanize', content: 'Click below for photos of our cohort', user_id: 2},
        {title: 'Unbelievable', content: 'I just got ridden off the road by this guy heres pics', user_id: 3}
      ]);
    });
};
