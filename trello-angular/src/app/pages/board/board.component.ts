import { Component, OnInit } from '@angular/core';
import { getDeviceScreenFromWindowWidth } from 'src/app/common/common-function';
import { DeviceScreenType } from 'src/app/models/comon-model';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  currentScreenSize: DeviceScreenType = null;
  constructor(private layoutService: LayoutService) {
    console.log('constructor BoardComponent');
    
    
    this.layoutService.currentScreenSize$.subscribe((type) => {
      if (type) {
        this.currentScreenSize = type;
      }
    });
  }

  ngOnInit(): void {
    this.layoutService.currentScreenSize$.next(getDeviceScreenFromWindowWidth(window.innerWidth));
  }
}
