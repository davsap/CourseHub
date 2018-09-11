import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { __core_private_testing_placeholder__ } from '../../../node_modules/@angular/core/testing';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json',
    // 'Accept-Content': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
user: Observable<User>;
  constructor(private http: HttpClient) { }

  addUser(user: User): void {
    this.http.post('http://localhost:8080/CourseHub/api/users', user, httpOptions).subscribe(console.log);
  }
}
