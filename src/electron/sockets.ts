const server = require('http').createServer();
const socket = require('socket.io')(server);

class Sockets {
  readonly port = 3000;

  constructor() {
    socket.on('connection', client => {
      console.log('client connected!');
      client.on('event', data => { /* … */ });
      client.on('disconnect', () => { /* … */ });
    });

    server.listen(this.port);
  }
}

export default new Sockets();
