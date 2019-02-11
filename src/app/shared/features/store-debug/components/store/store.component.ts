import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StoreService } from '../../../store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent {
  constructor(private readonly storeService: StoreService) { }
}
