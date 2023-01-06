import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}login`;

  constructor(private http: HttpClient) { }

  createLogin(login: Login): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { email : login.email, senha: login.senha});
  }
}
