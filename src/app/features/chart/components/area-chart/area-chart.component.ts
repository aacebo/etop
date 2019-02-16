import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IChartData } from '../../models';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaChartComponent {
  @Input() data: IChartData[] = [];
  @Input() ymin = 0;
  @Input() ymax = 100;
  @Input() colorScheme = 'horizon';
}
