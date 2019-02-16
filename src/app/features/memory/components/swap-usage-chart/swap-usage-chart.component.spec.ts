import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapUsageChartComponent } from './swap-usage-chart.component';

describe('SwapUsageChartComponent', () => {
  let component: SwapUsageChartComponent;
  let fixture: ComponentFixture<SwapUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapUsageChartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
