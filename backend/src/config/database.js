const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
