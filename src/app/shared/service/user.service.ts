import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    
  };

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<any[]>(`${this.apiUrl}getAllUsers`);
  }

  postUser(uploadData: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          this.apiUrl + 'createUser',
          JSON.stringify(uploadData),          
          { ...this.httpOptions, responseType: 'text' }
        )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  deleteUser(name: any){
    return this.http.delete(`${this.apiUrl}deleteUser/${name}`, { ...this.httpOptions, responseType: 'text' } )
  }
  updateUser(uploadData: any) {
    return new Promise((resolve, reject) => {
      this.http
        .put(
          this.apiUrl + 'updateUser',
          JSON.stringify(uploadData),          
          { ...this.httpOptions, responseType: 'text' }
        )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
