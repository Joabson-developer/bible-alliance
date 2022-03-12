import { BibleService } from './../services/bible.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bibleService: BibleService
  ) {}

  public inscription!: Subscription;
  public version: string = 'acf';
  public abbrev: string = 'gn';
  public chapter: string = '1';

  ngOnInit(): void {
    this.getVersions();
    this.getBooks();
    this.getBooks(this.abbrev);
    this.getChapter();
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  private response(response: any) {
    console.log(response);
  }

  private error(error: any) {
    console.log(error);
  }

  private getBooks(abbrev: string = '') {
    this.bibleService.getBooks(abbrev).subscribe(this.response, this.error);
  }

  private getVersions() {
    this.bibleService.getVersions().subscribe(this.response, this.error);
  }

  private getChapter() {
    this.inscription = this.route.params.subscribe((params: any) => {
      if (Object.entries(params).length === 0) {
        this.router.navigate([
          `/${this.version}/${this.abbrev}/${this.chapter}`,
        ]);

        return;
      }

      this.bibleService
        .getChapter(params.version, params.abbrev, params.chapter)
        .subscribe(this.response, this.error);
    });
  }
}
