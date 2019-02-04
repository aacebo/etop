import { Provider } from '@angular/core';

import { SocketService } from './socket.service';

export class SocketServiceMock {
  subscribe(e: string, cb: (...args) => void) {
    if (e && cb) {
      cb({});
    }
  }

  send(e: string, data?: any, cb?: (...args) => void) {
    if (e && cb) {
      cb(data);
    }
  }
}

export const socketServiceMockProvider: Provider = {
  provide: SocketService,
  useClass: SocketServiceMock,
};
