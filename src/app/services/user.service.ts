import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dbService: NgxIndexedDBService) { }

  addUser(username: string, password: string): Observable<number> {
    return this.dbService.add('users', { username, password }).pipe(map((id: any) => id as number));
  }

  getUser(username: string): Observable<any> {
    return this.dbService.getByIndex('users', 'username', username);
  }
}