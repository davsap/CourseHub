import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../model/user';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
user: Observable<User>;
  constructor(private http: HttpClient) { }

  addUser(user: User): void {
    this.http.post('http://localhost:8080/api/users', user).subscribe();
  }
}
