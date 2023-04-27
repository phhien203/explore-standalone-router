import { Component, inject } from '@angular/core';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  template: `
    <section class="grid grid-cols-4 grid-rows-2 gap-5">
      <app-show-card *ngFor="let show of shows" [show]="show"></app-show-card>
    </section>
  `,
})
export class ShowsComponent {
  shows = inject(ShowsService).getShows();
}
