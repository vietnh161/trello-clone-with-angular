import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { CommonLayoutModule } from '../components/common-layout.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [BrowserModule, RouterModule, CommonLayoutModule, MatIconModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
