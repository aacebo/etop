import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonTreeNodeComponent } from './components';

@NgModule({
  declarations: [JsonTreeNodeComponent],
  exports: [JsonTreeNodeComponent],
  imports: [CommonModule],
})
export class JsonTreeModule { }
