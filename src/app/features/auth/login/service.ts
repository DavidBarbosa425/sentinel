import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from './dto';
import { Result } from '../../../core/models/result';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

   url = "https://localhost:44364/api/auth"

  constructor(private httpClient:HttpClient) { }

  login(login: LoginDto){
    return this.httpClient.post<Result<string>>(`${this.url}/login`, login)
  }
}
