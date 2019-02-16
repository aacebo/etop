import * as io from 'socket.io';
import * as system from 'systeminformation';

import logger from './logger';
import usage from './usage';

class Sockets {
  readonly port = 3000;

  private readonly _events = ['cpu', 'memory', 'network', 'processes', 'battery', 'load', 'fs'];
  private readonly _io = io(this.port, {
    pingTimeout: 60000,
  });

  constructor() {
    this._io.on('connection', socket => {
      logger.log('connected!');

      for (const event of this._events) {
        usage.output.on(event, data => socket.emit(event, data));
      }

      socket.on('system', (data, fn) => {
        system.system().then(res => fn(res))
                       .catch(err => logger.error(err));
      });

      socket.on('os', (data, fn) => {
        system.osInfo().then(res => fn(res))
                       .catch(err => logger.error(err));
      });

      socket.on('fs', (data, fn) => {
        system.fsSize().then(res => fn(res))
                       .catch(err => logger.error(err));
      });
    });
  }
}

export default new Sockets();
