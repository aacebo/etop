import { Injectable } from '@angular/core';
import * as SocketIOClient from 'socket.io-client';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private readonly _socket: SocketIOClient.Socket;

  constructor() {
    this._socket = SocketIOClient(`ws://localhost:${environment.port}`);
  }

  send(event: string, data: any, cb?: (...args) => void) {
    this._socket.emit(event, data, cb);
  }

  on(event: string, cb: (...args) => void) {
    this._socket.on(event, cb);
  }
}
