import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IChartEntry } from '../../../chart';
import { FileSystemService } from '../../../../core';

@Component({
  selector: 'app-device-usage-chart',
  templateUrl: './device-usage-chart.component.html',
  styleUrls: ['./device-usage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceUsageChartComponent {
  readonly data: Observable<IChartEntry[]>;
  readonly desc: Observable<string>;

  constructor(
    private readonly fileSystemService: FileSystemService,
  ) {
    this.data = this.fileSystemService.store.pipe(
      map(v => v.size ? v.size.map(o => ({ name: o.fs, value: o.used })) : []),
    );
  }
}
