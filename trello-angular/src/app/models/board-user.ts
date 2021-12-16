import { Board } from './board';
import { User } from './user';

export class BoardUser {
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



