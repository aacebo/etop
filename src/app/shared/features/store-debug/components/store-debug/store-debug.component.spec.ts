import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatDialogModule, MatDialog } from '@angular/material';

import { StoreDebugComponent } from './store-debug.component';
import { StoreDebugDialogComponent } from '../store-debug-dialog';
import { JsonTreeModule } from '../../../json-tree';

describe('StoreDebugComponent', () => {
  let component: StoreDebugComponent;
  let dialog: MatDialog;
  let fixture: ComponentFixture<StoreDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDebugComponent, StoreDebugDialogComponent ],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        JsonTreeModule,
      ],
    }).overrideModule(BrowserAnimationsModule, ({
      set: {
        entryComponents: [StoreDebugDialogComponent],
      },
    }))
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDebugComponent);
    dialog = TestBed.get(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click', () => {
    const spy = spyOn(dialog, 'open');
    component.onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
