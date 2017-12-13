import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent implements OnInit {
  user = null;
  submitForm: any;



  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  userArray = [];

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userService.getChildren().subscribe(data => this.userArray = data);
  }

}
