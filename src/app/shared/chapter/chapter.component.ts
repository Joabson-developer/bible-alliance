import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit, AfterViewInit {
  @Input() chapter: any;
  @Input() bookName: string = '';
  @Input() chapters: number = 0;

  public activePage: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.chapter) {
      this.setPagination();
    }
  }

  private setPagination() {
    this.activePage = this.chapter.number;
    console.log(this.activePage);
  }
}
