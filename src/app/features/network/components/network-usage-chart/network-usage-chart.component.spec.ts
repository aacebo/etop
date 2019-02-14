import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkUsageChartComponent } from './network-usage-chart.component';

describe('NetworkUsageChartComponent', () => {
  let component: NetworkUsageChartComponent;
  let fixture: ComponentFixture<NetworkUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkUsageChartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
