import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IChartData } from '../../models';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  @Input() data: IChartData[] = [];
}
