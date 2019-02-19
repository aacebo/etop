import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FileSystemModule } from '../../../../shared';
import { ChartModule } from '../../../chart';
import { DeviceUsageChartComponent } from '../../components';
import { FileSystemComponent } from './file-system.component';

describe('FileSystemComponent', () => {
  let component: FileSystemComponent;
  let fixture: ComponentFixture<FileSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemComponent, DeviceUsageChartComponent ],
      imports: [NoopAnimationsModule, MatCardModule, FlexLayoutModule, ChartModule, FileSystemModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
