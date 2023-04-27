import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
})
export class AppComponent {
  title = 'explore-standalone-router';
}
