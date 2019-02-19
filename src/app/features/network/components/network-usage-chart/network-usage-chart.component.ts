import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartData } from '../../../chart';
import { NetworkService } from '../../../../shared';

@Component({
  selector: 'app-network-usage-chart',
  templateUrl: './network-usage-chart.component.html',
  styleUrls: ['./network-usage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkUsageChartComponent {
  readonly data: Observable<IChartData[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly networkService: NetworkService,
  ) {
    this.desc = this.networkService.store.pipe(
      map(v => v.active ? `OUT: ${v.active.map(o => o.tx_sec).reduce((p, k) => p + k).toFixed(2)},` +
                          ` IN: ${v.active.map(o => o.rx_sec).reduce((p, k) => p + k).toFixed(2)}` : ''),
    );

    this.data = this.networkService.store.pipe(
      map(v => [
        {
          name: 'Packets IN',
          series: v.history.reduce((prev, curr) => [ ...prev, ...curr ], [])
                           .map((o, i) => ({
                             name: i.toString(),
                             value: (o && o.rx_sec) ? o.rx_sec.toFixed(2) : 0,
                           })),
        },
        {
          name: 'Packets OUT',
          series: v.history.reduce((prev, curr) => [ ...prev, ...curr ], [])
                           .map((o, i) => ({
                              name: i.toString(),
                              value: (o && o.tx_sec) ? o.tx_sec.toFixed(2) : 0,
                            })),
        },
      ]),
    );
  }
}
