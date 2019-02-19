import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../../../chart';
import { LoadModule } from '../../../../core';
import { LoadChartComponent } from './load-chart.component';

describe('LoadChartComponent', () => {
  let component: LoadChartComponent;
  let fixture: ComponentFixture<LoadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, ChartModule, LoadModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
