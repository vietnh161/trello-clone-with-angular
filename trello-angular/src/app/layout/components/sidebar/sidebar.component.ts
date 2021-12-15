import { Component, Input, OnInit } from '@angular/core';
import { SideBarItem } from 'src/app/models/comon-model';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarItems: any[] = [];
  sidebarSelected: any;
  constructor(private layoutService: LayoutService) {
    this.layoutService.activeSidebar$.subscribe((sidebar :SideBarItem) => {
      this.setSidebar(sidebar)
    });
  }

  ngOnInit() {
    const item = this.sidebarItems.find((x) => x.link === location.pathname);
    if (item) {
      this.layoutService.activeSidebar$.next(item);
    }
  }

  setSidebar(sidebar: any) {
    this.sidebarSelected = sidebar;
  }
}
