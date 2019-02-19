import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartData } from '../../../chart';
import { MemoryService } from '../../../../core';

@Component({
  selector: 'app-swap-usage-chart',
  templateUrl: './swap-usage-chart.component.html',
  styleUrls: ['./swap-usage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapUsageChartComponent {
  readonly data: Observable<IChartData[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly memoryService: MemoryService,
  ) {
    this.desc = this.memoryService.store.pipe(
      map(v => v.active ? `${((v.active.swapused / v.active.swaptotal) * 100).toFixed(2)}%` : ''),
    );

    this.data = this.memoryService.store.pipe(
      map(v => [{
        name: 'Swap',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? ((o.swapused / o.swaptotal) * 100).toFixed(2) : 0,
        })),
      }]),
    );
  }
}
