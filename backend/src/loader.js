require('./config/environment');
const server = require('./config/server');
require('./config/database');
require('./config/router')(server);

// yarn production
// pm2 monit
// pm2 ls
// pm2 kill
// http://pm2.keymetrics.io/