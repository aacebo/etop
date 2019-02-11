import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDebugTreeComponent } from './store-debug-tree.component';

describe('StoreDebugTreeComponent', () => {
  let component: StoreDebugTreeComponent;
  let fixture: ComponentFixture<StoreDebugTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDebugTreeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDebugTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
