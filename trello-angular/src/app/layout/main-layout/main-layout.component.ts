import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
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
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
