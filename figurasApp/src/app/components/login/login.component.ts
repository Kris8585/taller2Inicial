import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor( private _loginService:LoginService) { 
    this.formBuilder = new FormBuilder();
    this.validateForm();
    this._loginService.setTitulo("Please Login");
  }

  ngOnInit() {
  }


  validateForm = () => {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


}
