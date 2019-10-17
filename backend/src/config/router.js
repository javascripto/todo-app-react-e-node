const { Router } = require('express');
const todoService = require('../api/todo/todoService');

const router = Router();

router.get('/', (req, res) => res.json({
  resources: ['/todos']
}));

module.exports =  function(server) {
  server.use('/api', router);
  todoService.register(router, '/todos');
};
