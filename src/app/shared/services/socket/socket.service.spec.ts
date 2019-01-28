import { TestBed, async } from '@angular/core/testing';

import { SocketService } from './socket.service';
import { SocketServiceMock } from './socket.service.mock';

describe('SocketService', () => {
  let service: SocketServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SocketService,
          useClass: SocketServiceMock,
        },
      ],
    });

    service = TestBed.get(SocketService);
  }));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should emit message', () => {

  });
});
