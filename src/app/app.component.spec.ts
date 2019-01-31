import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavModule, ToolbarModule } from './features';
import { OperatingSystemService, UsageService, SocketService, StoreModule, UsageModule, OperatingSystemModule } from './shared';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SidenavModule,
        ToolbarModule,
        StoreModule.forRoot({}),
        UsageModule,
        OperatingSystemModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        OperatingSystemService,
        UsageService,
        SocketService,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
