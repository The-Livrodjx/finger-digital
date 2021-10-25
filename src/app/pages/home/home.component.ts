import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  showUsername = ""

  users: User[] = [];

  constructor(
    public appComponent: AppComponent,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.showUsername = this.appComponent.showUsername

    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });

    return this.users
  }
}
