var knex = require('./knex')

module.exports = {
  signIn: function(body) {
    console.log(body);
return knex('my_user').where({
  'agentName': body.agentName,
}).first()
  },
  signUp: function(body, hash) {
      return knex('my_user').insert({
        'agentName': body.agentName,
        'password':hash
      }).returning('*')
    }
  }
