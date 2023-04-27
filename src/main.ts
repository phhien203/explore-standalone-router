import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./app/features/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'shows',
    loadChildren: () =>
      import('./app/features/shows/shows.module').then((m) => m.ShowsModule),
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
