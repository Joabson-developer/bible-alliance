import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() bookLength: number = 0;
  @Input() pageNumber: number = 0;
  @Input() backPage: number = 0;
  @Input() activePage: number = 0;
  @Input() nextPage: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookLength);
  }
}
