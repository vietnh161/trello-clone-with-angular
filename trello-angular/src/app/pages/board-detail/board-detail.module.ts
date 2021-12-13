import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardDetailComponent } from './board-detail.component';
import { BoardDetailRoutingModule } from './board-detail-routing.module';



@NgModule({
  declarations: [BoardDetailComponent],
  imports: [
    CommonModule,
    BoardDetailRoutingModule
  ]
})
export class BoardDetailModule { }
