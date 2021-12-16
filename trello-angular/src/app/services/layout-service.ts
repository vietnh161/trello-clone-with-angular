import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  Subject,
} from 'rxjs';
import { getDeviceScreenFromWindowWidth } from '../common/common-function';
import { DeviceScreenType } from '../models/common-type';
import { SideBarItem } from '../models/comon-model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  currentScreenSize$: BehaviorSubject<DeviceScreenType> =
    new BehaviorSubject<DeviceScreenType>(
      getDeviceScreenFromWindowWidth(window.innerWidth)
    );

  activeSidebar$: BehaviorSubject<string> = new BehaviorSubject<string>(
    location.pathname
  );
  constructor() {}

  getCurrentScreenSize(): Observable<DeviceScreenType> {
    return this.currentScreenSize$.pipe(distinctUntilChanged());
  }
}
