import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, fromEvent, map, of, startWith, switchMap } from 'rxjs';
import { getDeviceScreenFromWindowWidth } from 'src/app/common/common-function';
import { DeviceScreenType, SideBarItem } from 'src/app/models/comon-model';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  sidebarItems: SideBarItem[] = [
    {
      title: 'Boards',
      icon: 'shopping-cart-outline',
      link: '/board',
    },
    {
      title: 'Templates',
      icon: 'home-outline',
      link: '/template',
    },
    {
      title: 'Workspaces',
      icon: 'home-outline',
      link: '',
      group: true,
    },
  ];

  innerWidth: number = 0;
  currentScreenSize: DeviceScreenType = null;
  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const item = this.sidebarItems.find((x) => x.link === event.url);
        if (item) {
          this.layoutService.activeSidebar$.next(item);
        }
      });
  }

  ngOnInit() {
    console.log('Init MainLayoutComponent');
    this.checkDeviceScreen();
  }

  checkDeviceScreen() {
    this.layoutService.currentScreenSize$.subscribe((type) => {
      if (type) {
        this.currentScreenSize = type;
      }
    });

    fromEvent(window, 'resize')
      .pipe(
        startWith({ target: { innerWidth: window.innerWidth } }),
        map((event) => (event.target as Window).innerWidth),
        filter((w: any) => w != this.innerWidth)
      )
      .subscribe((evt) => {
        this.innerWidth = window.innerWidth;
        this.layoutService.currentScreenSize$.next(
          getDeviceScreenFromWindowWidth(this.innerWidth)
        );
      });
  }
}
