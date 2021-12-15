import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceScreenType } from 'src/app/models/comon-model';
import { LayoutService } from 'src/app/services/layout-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentScreenSize$: Subject<DeviceScreenType> = new Subject<DeviceScreenType>();
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    // this.currentScreenSize$ = this.layoutService.currentScreenSize$;
    console.log('HeaderComponent');
    
    this.layoutService.currentScreenSize$.subscribe((type) => {
        console.log(type);
    });
  }

}
