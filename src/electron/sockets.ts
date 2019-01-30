import * as io from 'socket.io';
import * as os from 'os';

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

      usage.output.on('stats', data => {
        socket.emit('usage', data);
      });

      socket.on('os', (data, fn) => {
        fn({
          arch: os.arch(),
          platform: os.platform(),
          release: os.release(),
          user: os.userInfo(),
        });
      });
    });
  }
}

export default new Sockets();
