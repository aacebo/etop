import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AreaChartModule } from '@swimlane/ngx-charts';

import { AreaChartComponent } from './area-chart.component';

describe('AreaChartComponent', () => {
  let component: AreaChartComponent;
  let fixture: ComponentFixture<AreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaChartComponent ],
      imports: [NoopAnimationsModule, AreaChartModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
