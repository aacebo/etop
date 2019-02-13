import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ILineChartData } from '../../models';
import { MemoryService } from '../../../../shared';

@Component({
  selector: 'app-memory-usage-chart',
  templateUrl: './memory-usage-chart.component.html',
  styleUrls: ['./memory-usage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryUsageChartComponent {
  readonly data: Observable<ILineChartData[]>;

  constructor(
    private readonly memoryService: MemoryService,
  ) {
    this.data = this.memoryService.storeService.pipe(
      map(v => [{
        name: 'Memory',
        series: v.history.map((o, i) => ({
          name: i.toString(),
          value: o ? ((o.used / o.total) * 100) : 0,
        })),
      }]),
    );
  }
}
