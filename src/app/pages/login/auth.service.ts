import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userAuthenticated: boolean = false

  showUsername = new EventEmitter<string>();

  constructor(private router: Router) {

  }

  logIn(username: string) {

    if(username !== ""){
      this.userAuthenticated = true
      this.showUsername.emit(username)
      this.router.navigate(['/home'])
    }

    else {
      this.userAuthenticated = false;
      alert("Digite um nome para o usuário")
      this.showUsername.emit("")
    }
  }
}
