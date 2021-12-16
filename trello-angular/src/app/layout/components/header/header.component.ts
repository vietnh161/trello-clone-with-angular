import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';
import { DeviceScreenType } from 'src/app/models/common-type';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidebarItems: any[] = [];
  sidebarSelected: any;
  currentScreenSize: DeviceScreenType = null;
  constructor(private layoutService: LayoutService) {
    
  }

  ngOnInit() {
    this.layoutService.getCurrentScreenSize().subscribe((type) => {
      this.currentScreenSize = type;
    });
  }
}
