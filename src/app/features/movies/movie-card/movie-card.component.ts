import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  template: `
    <article class="bg-white rounded-lg h-full">
      <img
        class="w-full h-96 bg-cover rounded-t-lg"
        [src]="movie?.url"
        [alt]="movie?.title"
      />

      <div class="px-5 py-5 flex justify-between">
        <div class="flex flex-col">
          <h2 class="text-md font-bold">{{ movie?.title }}</h2>
          <h3 class="text-sm font-bold">{{ movie?.subtitle }}</h3>
        </div>

        <p class="text-xs text-gray-500 flex">
          <img
            *ngFor="let rating of [].constructor(movie?.rating)"
            src="assets/star.svg"
            alt="rating star"
            class="h-5"
          />
        </p>
      </div>
    </article>
  `,
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
