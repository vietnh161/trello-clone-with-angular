import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, Observable, startWith, Subject } from 'rxjs';
import { DeviceScreenType } from '../models/comon-model';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    // innerWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);
    currentScreenSize$: Subject<DeviceScreenType> = new Subject<DeviceScreenType>();
    innerWidth: number = 0;
    constructor() {
        fromEvent(window, 'resize')
        .pipe(
          startWith({ target: { innerWidth: window.innerWidth }}),
          map(event => (event.target as Window).innerWidth),
          filter((w: any) => w != this.innerWidth)
        )
        .subscribe((evt) => {
          this.getDeviceScreenFromWindowWidth();
        });
  
    }

    getDeviceScreenFromWindowWidth() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
          this.currentScreenSize$.next('mobile');
        } else if (this.innerWidth < 1200) {
          this.currentScreenSize$.next('tablet');
        } else {
          this.currentScreenSize$.next('desktop');
        }
      }
}
