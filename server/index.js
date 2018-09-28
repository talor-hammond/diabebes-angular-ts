const conn = require('./db/connection');
const server = require('./server');

server.set('db', conn);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Listening on port: ', PORT);
})