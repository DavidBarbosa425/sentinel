import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../services/login';
import { LoginDto } from '../models/dtos/login';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,InputTextModule, ButtonModule, Checkbox],
  templateUrl: './login.html',
  styleUrl: './login.less'
})
export class Login {

    loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private loginService: LoginService){
        this.loginForm = this.formBuilder.group({
      email:[""],
      password:[""],
      rememberMe:[false]
    })

  }

  login(){
    debugger
    const login = new LoginDto(this.loginForm)
    this.loginService.login(login).subscribe(r => {
      alert(r.message)
    })

  }

}

//TODO FORGOT PASSWORD

//TODO NAME PROJECT AND IMAGE

