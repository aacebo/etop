import * as SocketIOClient from 'socket.io-client';

export class SocketServiceMock {
  private readonly _socket: SocketIOClient.Socket;

  send(...args) { }
  on(...args) { }
}
