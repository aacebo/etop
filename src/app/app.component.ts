import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ISidenavItem } from './features';
import {
  SocketService,
  IOperatingSystem,
  IUsage,
  OperatingSystemService,
  UsageService,
} from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly navItems = new BehaviorSubject<ISidenavItem[]>([
    { icon: 'mdi-chart-bar', tooltip: 'Charts', route: ['/charts'] },
    { icon: 'mdi-format-list-bulleted', tooltip: 'Process List', route: ['/process-list'] },
    { icon: 'mdi-history', tooltip: 'History', route: ['/history'] },
  ]);

  constructor(
    private readonly socketService: SocketService,
    private readonly usageService: UsageService,
    private readonly osService: OperatingSystemService,
  ) { }

  ngOnInit() {
    console.log(this.socketService.subscribe);
    this.socketService.subscribe('connect', () => {
      console.log('test');
      this.socketService.send('os', null, (data: IOperatingSystem) => {
        this.osService.setOs(data);
      });

      this.socketService.subscribe('usage', (data: IUsage) => {
        this.usageService.setActive(data);
      });
    });
  }
}
