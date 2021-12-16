import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Board, BoardRecentlyView, listBoard, listBoardRecentlyView } from '../models/board';
import { Background } from '../models/common-enum';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  listBoard: Board[] = _.cloneDeep(listBoard);
  listBoardRecentlyView: BoardRecentlyView[] = _.cloneDeep(listBoardRecentlyView);

  public apiUrl: string;
  private controller = 'boards';

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  getRecentlyViewBoard(userID: string): Observable<BoardRecentlyView[]> {
    const result = this.listBoardRecentlyView.filter(x => x.UserID === userID);
    return of(result);
  }
  
  getTemplateBoard(): Observable<Board[]> {
    const result = this.listBoard.filter(x => x.IsTemplate);
    return of(result);
  }

  

  // getBoard(): Observable<Board[]> {
  //     return this.http.get<Board[]>(`${this.apiUrl}/${this.controller}`);
  // }

  // getBoardInfor(BoardID): Observable<Board> {
  //     return this.http.get<Board>(`${this.apiUrl}/${this.controller}/${BoardID}`);
  // }

  // getBoardDetail(BoardID): Observable<BoardColumn[]> {
  //     return this.http.get<BoardColumn[]>(`${this.apiUrl}/board-detail/${BoardID}`);
  // }
}
