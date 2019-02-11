import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreDebugDialogComponent } from './store-debug-dialog.component';
import { StoreDebugTreeComponent } from '../store-debug-tree';
import { StoreModule } from '../../../store';

describe('StoreDebugDialogComponent', () => {
  let component: StoreDebugDialogComponent;
  let fixture: ComponentFixture<StoreDebugDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDebugDialogComponent, StoreDebugTreeComponent ],
      imports: [StoreModule.forRoot({}), MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDebugDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
