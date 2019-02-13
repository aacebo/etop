import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartData } from '../../models';
import { MemoryService } from '../../../../shared';

@Component({
  selector: 'app-memory-usage-chart',
  templateUrl: './memory-usage-chart.component.html',
  styleUrls: ['./memory-usage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryUsageChartComponent {
  readonly data: Observable<IChartData[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly memoryService: MemoryService,
  ) {
    this.desc = this.memoryService.storeService.pipe(
      map(v => v.active ? `${((v.active.used / v.active.total) * 100).toFixed(2)}%` : ''),
    );

    this.data = this.memoryService.storeService.pipe(
      map(v => [{
        name: 'Memory',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? ((o.used / o.total) * 100).toFixed(2) : 0,
        })),
      }]),
    );
  }
}
