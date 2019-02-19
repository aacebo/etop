import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MemoryComponent } from './memory.component';
import { MemoryUsageChartComponent, SwapUsageChartComponent } from '../../components';
import { ChartModule } from '../../../chart';
import { MemoryModule } from '../../../../core';

describe('MemoryComponent', () => {
  let component: MemoryComponent;
  let fixture: ComponentFixture<MemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryComponent, MemoryUsageChartComponent, SwapUsageChartComponent ],
      imports: [ChartModule, MatCardModule, FlexLayoutModule, NoopAnimationsModule, MemoryModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
