import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, startWith } from 'rxjs';
import { DeviceScreenType } from 'src/app/models/comon-model';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  sidebarItems = [
    {
      title: 'Boards',
      icon: 'shopping-cart-outline',
      link: '/board',
      home: true,
    },
    {
      title: 'Templates',
      icon: 'home-outline',
      link: '/template',
    },
    {
      title: 'Workspaces',
      group: true,
    },
  ];

  innerWidth: number = 0;
  deviceScreen: DeviceScreenType = null;
  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() { 
    this.layoutService.currentScreenSize$.subscribe((type) => {
      if (type) {
        this.deviceScreen = type;
      }
    });

    this.checkDeviceScreen();
  }

  checkDeviceScreen() {
    // this.layoutService.currentScreenSize$.subscribe((type) => {
    //   if (type) {
    //     this.deviceScreen = type;
    //   }
    // });

   
  }

  getDeviceScreenFromWindowWidth() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.layoutService.currentScreenSize$.next('mobile');
    } else if (this.innerWidth < 1200) {
      this.layoutService.currentScreenSize$.next('tablet');
    } else {
      this.layoutService.currentScreenSize$.next('desktop');
    }
  }
}
