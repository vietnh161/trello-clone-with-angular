import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BoadDetailLayoutComponent } from './boad-detail-layout.component';
import { CommonLayoutModule } from '../components/common-layout.module';

@NgModule({
  declarations: [
    BoadDetailLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonLayoutModule
  ]
})
export class BoardDetailLayoutModule {

}