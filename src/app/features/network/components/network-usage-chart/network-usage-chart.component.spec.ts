import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../../../chart';
import { NetworkModule } from '../../../../shared';
import { NetworkUsageChartComponent } from './network-usage-chart.component';

describe('NetworkUsageChartComponent', () => {
  let component: NetworkUsageChartComponent;
  let fixture: ComponentFixture<NetworkUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkUsageChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, ChartModule, NetworkModule],
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
