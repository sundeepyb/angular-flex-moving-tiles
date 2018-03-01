import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovingTilesComponent } from './moving-tiles/moving-tiles.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovingTilesComponent,
  ],
  exports: [ MovingTilesComponent, CommonModule ]
})
export class SharedModule { }