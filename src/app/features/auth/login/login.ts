import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from './service';
import { LoginDto } from './dto';
import { ToastService } from '../../../shared/toast/toast';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,InputTextModule, ButtonModule, Checkbox],
  templateUrl: './login.html',
  styleUrl: './login.less'
})
export class Login {

    loginForm!:FormGroup

  constructor(
    private formBuilder:FormBuilder, 
    private loginService: LoginService,
    private toast: ToastService
  ){
      this.loginForm = this.formBuilder.group({
      email:[""],
      password:[""],
      rememberMe:[false]
    })

  }

  login(){
    const login = new LoginDto(this.loginForm)
    this.loginService.login(login).subscribe(result => {   
debugger
      if(!result.success) return this.toast.showWarn("Warning", result.message);

      localStorage.setItem('token',result.data)

    })

  }

}

//TODO FORGOT PASSWORD

//TODO NAME PROJECT AND IMAGE

