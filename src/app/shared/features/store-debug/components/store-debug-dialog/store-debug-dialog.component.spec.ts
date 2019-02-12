import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreDebugDialogComponent } from './store-debug-dialog.component';
import { StoreModule } from '../../../store';
import { JsonTreeModule } from '../../../json-tree';

describe('StoreDebugDialogComponent', () => {
  let component: StoreDebugDialogComponent;
  let fixture: ComponentFixture<StoreDebugDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDebugDialogComponent ],
      imports: [StoreModule.forRoot({}), MatDialogModule, JsonTreeModule],
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
