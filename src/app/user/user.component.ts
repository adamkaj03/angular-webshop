import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../models/user";
import {UserService} from "../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements  OnInit{
  public users: UserDTO[] = [];

  constructor(private userService: UserService) {
  }

  public getUsers() {
    this.userService.getUsers().subscribe(
      (response: UserDTO[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
