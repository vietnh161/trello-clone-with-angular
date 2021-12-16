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
    
  }

  ngOnInit() {
    this.layoutService.activeSidebar$.subscribe((path) => {
      const item = this.sidebarItems.find((x) => x.link === path);
      if (item) {
        this.setSidebar(item);
      }
    });
  }

  setSidebar(sidebar: any) {
    this.sidebarSelected = sidebar;
  }
}
