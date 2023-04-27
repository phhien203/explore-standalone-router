import { Component, Input } from '@angular/core';
import { Show } from '../show.model';

@Component({
  selector: 'app-show-card',
  template: `
    <article class="bg-white rounded-lg">
      <img
        class="w-full h-96 bg-cover rounded-t-lg"
        [src]="show?.url"
        [alt]="show?.name"
      />

      <div class="px-5 py-5 flex justify-between">
        <div class="flex flex-col">
          <h2 class="text-md font-bold">{{ show?.name }}</h2>
        </div>

        <p class="text-xs text-gray-500 flex">
          <img
            *ngFor="let rating of [].constructor(show?.rating)"
            src="assets/star.svg"
            alt="rating star"
            class="h-5"
          />
        </p>
      </div>
    </article>
  `,
})
export class ShowCardComponent {
  @Input() show: Show | undefined;
}
