import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/api/users/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }
}