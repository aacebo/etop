import * as pidusage from 'pidusage';
import { EventEmitter } from 'events';

import logger from './logger';

class Usage {
  readonly output = new EventEmitter();

  private readonly _interval = 1000;

  constructor() {
    setInterval(() => {
      pidusage(process.pid, (err, stats) => {
        if (err) {
          logger.error(err);
        }

        this.output.emit('stats', stats);
      });
    }, this._interval);
  }
}

export default new Usage();
