import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users1 = [];
  users2 = [];
  constructor(private http: HttpClient) {
  }
  getTable1users():User[] {
    return this.users1;

  }
  getTable2users():User[] {
    return this.users2;

  }
  setTable1users(users:User[]) {
    this.users1 = users;
  }
  setTable2users(users:User[]) {
    this.users2 = users;
  }

}