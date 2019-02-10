import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ISidenavItem } from './features';
import {
  SocketService,
  SystemService,
  CpuService,
  MemoryService,
  ProcessesService,
  BatteryService,
  NetworkService,
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
    private readonly systemService: SystemService,
    private readonly cpuService: CpuService,
    private readonly memoryService: MemoryService,
    private readonly processesService: ProcessesService,
    private readonly batteryService: BatteryService,
    private readonly networkService: NetworkService,
  ) { }

  ngOnInit() {
    /* istanbul ignore next */
    this.socketService.subscribe('connect', () => {
      this.socketService.send('system', null, data => this.systemService.set('system', data));
      this.socketService.send('os', null, data => this.systemService.set('os', data));

      this.socketService.subscribe('processes', data => this.processesService.set('processes', data));
      this.socketService.subscribe('battery', data => this.batteryService.set('battery', data));

      this.socketService.subscribe('cpu', data => this.cpuService.setActive(data));
      this.socketService.subscribe('memory', data => this.memoryService.setActive(data));
      this.socketService.subscribe('network', data => this.networkService.setActive(data));
    });
  }
}
