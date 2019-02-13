import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILineChartData } from '../../models';
import { LoadService } from '../../../../shared';

@Component({
  selector: 'app-load-chart',
  templateUrl: './load-chart.component.html',
  styleUrls: ['./load-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadChartComponent {
  readonly data: Observable<ILineChartData[]>;

  constructor(
    private readonly loadService: LoadService,
  ) {
    this.data = this.loadService.storeService.pipe(map(v => ([
      {
        name: 'Total',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload : 0,
        })),
      },
      {
        name: 'User',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload_user : 0,
        })),
      },
      {
        name: 'System',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload_system : 0,
        })),
      },
    ])));
  }
}
