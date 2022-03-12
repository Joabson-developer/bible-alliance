import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit, OnChanges {
  @Input() chapter: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.chapter) {
      console.log(this.chapter);
    }
  }
}
