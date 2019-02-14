import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuLoadChartComponent } from './cpu-load-chart.component';

describe('CpuLoadChartComponent', () => {
  let component: CpuLoadChartComponent;
  let fixture: ComponentFixture<CpuLoadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLoadChartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuLoadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
