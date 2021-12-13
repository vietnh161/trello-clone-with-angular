import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { CommonLayoutModule } from '../components/common-layout.module';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonLayoutModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule {

}