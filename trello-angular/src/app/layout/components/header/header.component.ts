import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceScreenType } from 'src/app/models/comon-model';
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
    this.layoutService.currentScreenSize$.subscribe((type) => {
      this.currentScreenSize = type;
    });
  }

  ngOnInit() {

    
  }
}
