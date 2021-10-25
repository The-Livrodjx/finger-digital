import { Component } from '@angular/core';
import { AuthService } from './pages/login/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showUsername: string = "The-Undefined"

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.showUsername.subscribe(name => {
      this.showUsername = name
    })
  }
}
