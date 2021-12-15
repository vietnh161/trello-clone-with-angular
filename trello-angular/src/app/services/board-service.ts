import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
    providedIn: 'root',
})
export class BoardService {
    public apiUrl: string;
    private controller = "boards";

    

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:3000'
    }

    getBoard(): Observable<Board[]> {
        return this.http.get<Board[]>(`${this.apiUrl}/${this.controller}`);
    }

    // getBoardInfor(BoardID): Observable<Board> {
    //     return this.http.get<Board>(`${this.apiUrl}/${this.controller}/${BoardID}`);
    // }

    // getBoardDetail(BoardID): Observable<BoardColumn[]> {
    //     return this.http.get<BoardColumn[]>(`${this.apiUrl}/board-detail/${BoardID}`);
    // }
}
