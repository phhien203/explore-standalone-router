import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ShowCardComponent } from './show-card/show-card.component';
import { ShowsService } from './shows.service';

@Component({
  standalone: true,
  selector: 'app-shows',
  template: `
    <section class="grid grid-cols-4 grid-rows-2 gap-5">
      <app-show-card *ngFor="let show of shows" [show]="show"></app-show-card>
    </section>
  `,
  imports: [NgFor, ShowCardComponent],
})
export class ShowsComponent {
  shows = inject(ShowsService).getShows();
}
