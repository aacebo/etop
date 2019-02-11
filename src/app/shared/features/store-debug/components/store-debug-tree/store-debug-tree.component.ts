import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-store-debug-tree',
  templateUrl: './store-debug-tree.component.html',
  styleUrls: ['./store-debug-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDebugTreeComponent {
  @Input() data: any;
}
