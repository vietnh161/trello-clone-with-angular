import { BaseModel } from './base-model';
import { BoardShortDetail } from './board';
import { User } from './user';

export class Workspace extends BaseModel {
  ID: number = 0;
  Title: string = '';
  Logo?: string;
  Members: User[] = [];
  ListBoard: BoardShortDetail[] = [];
}
