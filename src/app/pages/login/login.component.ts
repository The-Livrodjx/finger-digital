import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  public loginForm;
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    formBuilder: FormBuilder
  ) {

    this.loginForm = formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  logIn() {
    const { username } = this.loginForm.controls;

    this.authService.logIn(username.value)
  }

}
