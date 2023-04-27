import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies.routing.module';

@NgModule({
  declarations: [MovieCardComponent, MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
