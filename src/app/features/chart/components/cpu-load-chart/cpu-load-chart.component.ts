import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILineChartData } from '../../models';
import { LoadService } from '../../../../shared';

@Component({
  selector: 'app-cpu-load-chart',
  templateUrl: './cpu-load-chart.component.html',
  styleUrls: ['./cpu-load-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuLoadChartComponent {
  readonly data: Observable<ILineChartData[]>;

  constructor(
    private readonly loadService: LoadService,
  ) {
    this.data = this.loadService.storeService.pipe(map(v => v.active ? v.active.cpus.map((o, i) => ({
      name: `CORE #${i + 1}`,
      series: v.history.map(k => k ? k.cpus.filter((c, j) => j === i) : [])
                       .reduce((prev, curr) => [ ...prev, ...curr ], [])
                       .map((b, ij) => ({
        name: ij.toString(),
        value: b.load,
      })),
    })) : []));
  }
}
