import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/dtos/login';
import { Result } from '../core/interfaces/result';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

   url = "https://localhost:44364/api/auth"

  constructor(private httpClient:HttpClient) { }

  login(login: LoginDto){
    return this.httpClient.post<Result>(`${this.url}/login`, login)
  }
}
