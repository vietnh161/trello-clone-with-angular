import { Injectable } from '@angular/core';
import {
  Subject,
} from 'rxjs';
import { DeviceScreenType, SideBarItem } from '../models/comon-model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  // innerWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth);
  currentScreenSize$: Subject<DeviceScreenType> =
    new Subject<DeviceScreenType>();
  activeSidebar$: Subject<SideBarItem> = new Subject<SideBarItem>();
  constructor() {}
}
