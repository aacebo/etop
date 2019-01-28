import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ISidenavItem } from './features';
import { SocketService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  navItems = new BehaviorSubject<ISidenavItem[]>([
    { icon: 'mdi-chart-bar', tooltip: 'Charts', route: ['/charts'] },
    { icon: 'mdi-format-list-bulleted', tooltip: 'Process List', route: ['/process-list'] },
    { icon: 'mdi-history', tooltip: 'History', route: ['/history'] },
  ]);

  constructor(private readonly socketService: SocketService) { }

  ngOnInit() {
    this.socketService.on('connect', () => {
      console.log('connected!');
    });
  }
}
