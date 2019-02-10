import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ILineChartData } from '../../models';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  @Input() data: ILineChartData[] = [];
}
