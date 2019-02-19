import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../../../chart';
import { LoadModule } from '../../../../core';
import { CpuLoadChartComponent } from './cpu-load-chart.component';

describe('CpuLoadChartComponent', () => {
  let component: CpuLoadChartComponent;
  let fixture: ComponentFixture<CpuLoadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLoadChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, ChartModule, LoadModule],
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
