import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartData } from '../../models';
import { LoadService } from '../../../../shared';

@Component({
  selector: 'app-cpu-load-chart',
  templateUrl: './cpu-load-chart.component.html',
  styleUrls: ['./cpu-load-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuLoadChartComponent {
  readonly data: Observable<IChartData[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly loadService: LoadService,
  ) {
    this.desc = this.loadService.storeService.pipe(
      map(v => v.active ? `Avg: ${(v.active.cpus.map(o => o.load).reduce((p, k) => p + k) / v.active.cpus.length).toFixed(2)}%` : ''),
    );

    this.data = this.loadService.storeService.pipe(map(v => v.active ? v.active.cpus.map((o, i) => ({
      name: `CORE #${i + 1}`,
      series: v.history.map(k => k ? k.cpus.filter((c, j) => j === i) : [])
                       .reduce((prev, curr) => [ ...prev, ...curr ], [])
                       .map((b, ij) => ({
        name: ij.toString(),
        value: b.load.toFixed(2),
      })),
    })) : []));
  }
}
