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

  createActions = [
    {
      ID: 1,
      Title: 'Create board',
      Description:'A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.'
    },
    {
      ID: 2,
      Title: 'Start with a template',
      Description:'Get started faster with a board template.'
    },
    {
      ID: 3,
      Title: 'Create Workspace',
      Description:'A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.'
    }
  ]
  currentAction = null;

  constructor(private layoutService: LayoutService) {
    
  }

  ngOnInit() {
    this.layoutService.getCurrentScreenSize().subscribe((type) => {
      this.currentScreenSize = type;
    });
  }


  handleClickAction(createAction: any){
    this.currentAction = createAction.ID;
  }
}
