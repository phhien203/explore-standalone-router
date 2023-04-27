import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Component({
  standalone: true,
  selector: 'app-movies',
  template: `
    <section class="grid grid-cols-4 grid-rows-2 gap-5">
      <app-movie-card
        *ngFor="let movie of movies"
        [movie]="movie"
      ></app-movie-card>
    </section>
  `,
  imports: [NgFor, MovieCardComponent],
})
export class MoviesComponent {
  movies: Movie[] = inject(MoviesService).getMovies();
}
