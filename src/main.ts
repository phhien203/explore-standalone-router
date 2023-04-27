import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () =>
      import('./app/features/movies/movies.component').then(
        (m) => m.MoviesComponent
      ),
  },
  {
    path: 'shows',
    loadComponent: () =>
      import('./app/features/shows/shows.component').then(
        (m) => m.ShowsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'shows',
    pathMatch: 'full',
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
