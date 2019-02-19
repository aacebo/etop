import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IChartEntry } from '../../models';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent {
  @Input() data: IChartEntry[] = [];
  @Input() colorScheme = 'horizon';
}
