import { Component, OnInit } from '@angular/core';
import { getDeviceScreenFromWindowWidth } from 'src/app/common/common-function';
import { DeviceScreenType } from 'src/app/models/common-type';
import { BoardService } from 'src/app/services/board-service';
import { LayoutService } from 'src/app/services/layout-service';
import * as _ from 'lodash';
import { Board, BoardRecentlyView, listBoard } from 'src/app/models/board';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  listTemplateBoard: Board[] = [];
  listRecentBoard: BoardRecentlyView[] = [];

  currentScreenSize: DeviceScreenType = null;
  constructor(
    private layoutService: LayoutService,
    private boardService: BoardService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.layoutService.getCurrentScreenSize().subscribe((type) => {
      this.currentScreenSize = type;
    });


    this.getBoardData();

  }

  getBoardData() {
    this.getTemplateBoard();
    this.getRecentlyViewBoard();
    this.getWorkspaceBoard()
  }

  getTemplateBoard() {
    this.boardService
      .getTemplateBoard()
      .subscribe((data) => {
        this.listTemplateBoard = data;
      });
  }

  getRecentlyViewBoard() {
    this.boardService
      .getRecentlyViewBoard(this.authService.getUser()?.ID)
      .subscribe((data) => {
        this.listRecentBoard = data;
      });
  }

  getWorkspaceBoard() {
   
  }
}
