import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowCardComponent } from './show-card/show-card.component';
import { ShowsComponent } from './shows.component';
import { ShowsRoutingModule } from './shows.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShowCardComponent, ShowsComponent],
  imports: [CommonModule, ShowsRoutingModule],
})
export class ShowsModule {}
