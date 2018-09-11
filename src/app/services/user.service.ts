import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
user: Observable<User>;
  constructor(private http: HttpClient) { }

  addUser(user: User): void {
    this.http.post('http://localhost:8080/api/users', user, httpOptions).subscribe();
  }
}
