import { Component, inject } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  template: `
    <section class="grid grid-cols-4 grid-rows-2 gap-5">
      <app-movie-card
        *ngFor="let movie of movies"
        [movie]="movie"
      ></app-movie-card>
    </section>
  `,
})
export class MoviesComponent {
  movies: Movie[] = inject(MoviesService).getMovies();
}
