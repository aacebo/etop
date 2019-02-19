import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../../../chart';
import { FileSystemModule } from '../../../../shared';
import { DeviceUsageChartComponent } from './device-usage-chart.component';

describe('DeviceUsageChartComponent', () => {
  let component: DeviceUsageChartComponent;
  let fixture: ComponentFixture<DeviceUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceUsageChartComponent ],
      imports: [ChartModule, MatCardModule, FileSystemModule, NoopAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
