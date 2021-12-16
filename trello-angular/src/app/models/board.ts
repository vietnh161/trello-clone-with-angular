import { BaseModel } from './base-model';
import { Background } from './common-enum';
import { listUser, User } from './user';

export class Board extends BaseModel {
  ID: number = 0;
  Title: string = '';
  Background: string = '';
  IsTemplate?: boolean;
  WorkspaceID?: number;
}

export class BoardShortDetail {
  ID: number = 0;
  Title: string = '';
  Background: string = '';
  IsTemplate?: boolean;
  CreatedDate: Date = new Date();
}

export class BoardRecentlyView {
  ID: number = 0;
  UserID: String;
  FullName: string;
  Email: string;
  BoardID: number;
  Title: string;
  Background: string;
  IsTemplate?: boolean;
  PinDate?: Date;
  LastViewedDate?: Date;
  BoardCreatedDate?: Date;
  constructor(user: User, board: Board, pinDate?: Date, lastViewedDate?: Date) {
    this.UserID = user.ID;
    this.FullName = user.FullName;
    this.Email = user.Email;
    this.BoardID = board.ID;
    this.Title = board.Title;
    this.Background = board.Background;
    this.IsTemplate = board.IsTemplate;
    this.BoardCreatedDate = board.CreatedDate;
    this.PinDate = pinDate;
    this.LastViewedDate = lastViewedDate;
  }
}

export const listBoard: Board[] = [
    {
      ID: 0,
      Title: 'Project Management',
      Background: Background.Blue,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 1,
      Title: 'Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla',
      Background: Background.Cyan,
      IsTemplate: false,
      CreatedBy: listUser[0].FullName,
      CreatedDate: new Date(),
      ModifiedBy: listUser[0].FullName,
      ModifiedDate: new Date(),
    },
    {
      ID: 2,
      Title: 'ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget',
      Background: Background.Gray,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 3,
      Title: 'Nunc mauris elit',
      Background: Background.Green,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 4,
      Title: 'Nunc ac sem ut dolor dapibus',
      Background: Background.Lime,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 5,
      Title: 'Quisque fringilla euismod enim',
      Background: Background.Pink,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 6,
      Title: 'Suspendisse ac metus vitae velit egestas lacinia',
      Background: Background.Purple,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 7,
      Title: 'Cras lorem lorem',
      Background: Background.Red,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
    {
      ID: 8,
      Title: 'Etiam gravida molestie',
      Background: Background.Yellow,
      IsTemplate: true,
      CreatedBy: 'admin',
      CreatedDate: new Date(),
      ModifiedBy: 'admin',
      ModifiedDate: new Date(),
    },
  ];
  

export const listBoardRecentlyView: BoardRecentlyView[] = [
   new BoardRecentlyView(listUser[0],listBoard[0],undefined,new Date('2021/12/10')),
   new BoardRecentlyView(listUser[0],listBoard[1],undefined,new Date()),
   new BoardRecentlyView(listUser[1],listBoard[0]),
];