const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);

Todo.updateOptions({
  new: true,
  runValidators: true,
});

// https://github.com/baugarten/node-restful#filtering-the-results

module.exports = Todo;
