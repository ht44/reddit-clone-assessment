
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {full_name: 'Hayden Turek', username: 'guy49', img_url: 'http://bit.ly/2nAudW8'},
        {full_name: 'Avery McGinty', username: 'girl88', img_url: 'http://bit.ly/2nTz9Y7'},
        {full_name: 'Zubair Desai', username: 'legend00', img_url: 'http://bit.ly/2nFRBCA'}
      ]);
    });
};
