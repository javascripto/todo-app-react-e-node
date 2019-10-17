const restful = require('node-restful');

const todoSchema = new restful.mongoose.Schema({
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = restful.model('Todo', todoSchema);
