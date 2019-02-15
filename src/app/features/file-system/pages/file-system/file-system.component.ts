import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSystemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
