import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTreeNodeComponent } from './json-tree-node.component';

describe('JsonTreeNodeComponent', () => {
  let component: JsonTreeNodeComponent;
  let fixture: ComponentFixture<JsonTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonTreeNodeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.expanded = false;
    component.key = 'test';
    component.value = { test: 'test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get object keys', () => {
    expect(component.keys).toEqual(['test']);
  });

  describe('toggle', () => {
    it('should toggle expanded state', () => {
      component.toggle();
      expect(component.expanded).toEqual(true);
    });

    it('should not toggle expanded state', () => {
      component.value = 1;
      component.toggle();
      expect(component.expanded).toEqual(false);
    });
  });
});
