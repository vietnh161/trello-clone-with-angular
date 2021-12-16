import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Board, listBoard } from '../models/board';
import { Background } from '../models/common-enum';
import * as _ from 'lodash';
import { listUser, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(
    localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser')!)
      : listUser[0]
  );

  constructor() {
  }

  getUser() {
    return this.currentUser$.value;
  }

  setUser(user: User){
    this.currentUser$.next(user);
  }
}
