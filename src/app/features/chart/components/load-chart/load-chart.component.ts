import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartData } from '../../models';
import { LoadService } from '../../../../shared';

@Component({
  selector: 'app-load-chart',
  templateUrl: './load-chart.component.html',
  styleUrls: ['./load-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadChartComponent {
  readonly data: Observable<IChartData[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly loadService: LoadService,
  ) {
    this.desc = this.loadService.storeService.pipe(
      map(v => v.active ? `System: ${v.active.currentload_system.toFixed(2)}%,` +
                          ` User: ${v.active.currentload_user.toFixed(2)}%,` +
                          ` Idle: ${v.active.currentload_idle.toFixed(2)}%` : ''),
    );

    this.data = this.loadService.storeService.pipe(map(v => ([
      {
        name: 'Total',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload.toFixed(2) : 0,
        })),
      },
      {
        name: 'User',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload_user.toFixed(2) : 0,
        })),
      },
      {
        name: 'System',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? o.currentload_system.toFixed(2) : 0,
        })),
      },
    ])));
  }
}
