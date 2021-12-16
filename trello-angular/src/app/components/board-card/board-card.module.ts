import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardCardComponent } from './board-card.component';



@NgModule({
  declarations: [
    BoardCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BoardCardComponent
  ]
})
export class BoardCardModule { }
