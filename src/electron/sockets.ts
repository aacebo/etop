import * as io from 'socket.io';
import * as system from 'systeminformation';

import logger from './logger';
import usage from './usage';

class Sockets {
  readonly port = 3000;

  private readonly _io = io(this.port, {
    pingTimeout: 60000,
  });

  constructor() {
    this._io.on('connection', socket => {
      logger.log('connected!');

      usage.output.on('cpu', data => {
        socket.emit('cpu', data);
      });

      usage.output.on('memory', data => {
        socket.emit('memory', data);
      });

      usage.output.on('network', data => {
        socket.emit('network', data);
      });

      usage.output.on('processes', data => {
        socket.emit('processes', data);
      });

      socket.on('system', (data, fn) => {
        system.system().then(res => fn(res))
                       .catch(err => logger.error(err));
      });

      socket.on('os', (data, fn) => {
        system.osInfo().then(res => fn(res))
                       .catch(err => logger.error(err));
      });
    });
  }
}

export default new Sockets();
