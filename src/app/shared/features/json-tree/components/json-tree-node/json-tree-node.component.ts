import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-json-tree-node',
  templateUrl: './json-tree-node.component.html',
  styleUrls: ['./json-tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonTreeNodeComponent {
  @Input() key: string;
  @Input() value: any | any[];
  @Input() expanded = false;

  get isArray() {
    return Array.isArray(this.value);
  }

  get isObject() {
    return typeof this.value === 'object' && !this.isArray;
  }

  get isString() {
    return typeof this.value === 'string';
  }

  get isComplex() {
    return this.value && (this.isArray || this.isObject);
  }

  get keys() {
    return Object.keys(this.value);
  }

  get stringify() {
    return JSON.stringify(this.value);
  }

  toggle() {
    if (this.isComplex) {
      this.expanded = !this.expanded;
    }
  }
}
