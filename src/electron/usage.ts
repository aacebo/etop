import * as system from 'systeminformation';
import { EventEmitter } from 'events';

import logger from './logger';

class Usage {
  readonly output = new EventEmitter();

  constructor() {
    setInterval(() => {
      system.cpu().then(data => this.output.emit('cpu', data))
                  .catch(err => logger.error(err));

      system.mem().then(data => this.output.emit('memory', data))
                  .catch(err => logger.error(err));

      system.networkStats('*').then(data => this.output.emit('network', data))
                              .catch(err => logger.error(err));

      system.processes().then(data => this.output.emit('processes', data))
                        .catch(err => logger.error(err));

      system.battery().then(data => this.output.emit('battery', data))
                      .catch(err => logger.error(err));

      system.currentLoad().then(data => this.output.emit('load', data))
                          .catch(err => logger.error(err));
    }, 2000);
  }
}

export default new Usage();
