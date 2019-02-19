import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { MemoryModule } from '../../../../core';
import { ChartModule } from '../../../chart';
import { SwapUsageChartComponent } from './swap-usage-chart.component';

describe('SwapUsageChartComponent', () => {
  let component: SwapUsageChartComponent;
  let fixture: ComponentFixture<SwapUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapUsageChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, MemoryModule, ChartModule],
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
