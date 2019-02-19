import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavModule, ToolbarModule } from './features';
import {
  SocketService,
  socketServiceMockProvider,
  StoreModule,
  StoreDebugModule,
  CpuModule,
  MemoryModule,
  SystemModule,
  ProcessesModule,
  BatteryModule,
  NetworkModule,
  LoadModule,
  FileSystemModule,
} from './shared';

describe('AppComponent', () => {
  let component: AppComponent;
  let socketService: SocketService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SidenavModule,
        ToolbarModule,
        StoreModule.forRoot({}),
        StoreDebugModule,
        CpuModule,
        MemoryModule,
        SystemModule,
        ProcessesModule,
        BatteryModule,
        NetworkModule,
        LoadModule,
        FileSystemModule,
      ],
      providers: [
        socketServiceMockProvider,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    socketService = TestBed.get(SocketService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(socketService).toBeTruthy();
  });

  it('should initialize', () => {
    const spy = spyOn(socketService, 'subscribe');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
