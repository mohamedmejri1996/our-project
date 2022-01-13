import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,) { }
  login(data:any): Observable<any> {
    return this.http.post("http://localhost:3000/auth/login", data, {observe: 'response'});
  }

  isUser() {
    return localStorage.getItem('isClient') === 'true';
  }

  /* public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token) {
        return !this.jwtHelper.isTokenExpired(token);
    }
    return false; 
}*/


}
