import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CpuComponent } from './cpu.component';
import { CpuLoadChartComponent, LoadChartComponent } from '../../components';
import { ChartModule } from '../../../chart';
import { LoadModule } from '../../../../shared';

describe('CpuComponent', () => {
  let component: CpuComponent;
  let fixture: ComponentFixture<CpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuComponent, CpuLoadChartComponent, LoadChartComponent ],
      imports: [ChartModule, MatCardModule, FlexLayoutModule, LoadModule, NoopAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
