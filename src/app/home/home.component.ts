import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public inscription!: Subscription;
  public version: string = 'acf';
  public abbrev: string = 'gn';
  public chapter: string = '1';

  ngOnInit(): void {
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

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
