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

  send(e: string, data?: any, cb?: (...args) => void) {
    this._socket.emit(e, data, cb);
  }

  subscribe(e: string, cb: (...args) => void) {
    this._socket.on(e, cb);
  }
}
