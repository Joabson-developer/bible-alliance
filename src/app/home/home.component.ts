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
    this.bibleService.getVersions().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.fullBible();
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  private fullBible() {
    this.inscription = this.route.params.subscribe((params: any) => {
      if (Object.entries(params).length === 0) {
        this.router.navigate([
          `/${this.version}/${this.abbrev}/${this.chapter}`,
        ]);

        return;
      }

      console.log(params);
    });
  }
}
