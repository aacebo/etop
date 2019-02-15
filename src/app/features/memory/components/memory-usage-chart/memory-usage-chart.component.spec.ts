import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../../../chart';
import { MemoryModule } from '../../../../shared';
import { MemoryUsageChartComponent } from './memory-usage-chart.component';

describe('MemoryUsageChartComponent', () => {
  let component: MemoryUsageChartComponent;
  let fixture: ComponentFixture<MemoryUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryUsageChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, ChartModule, MemoryModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
