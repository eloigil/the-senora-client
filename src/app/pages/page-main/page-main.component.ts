import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AdviceService } from '../../services/advice.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})

export class PageMainComponent implements OnInit {
  user = null;
  submitForm: any;
  advices: any = [];
  id: any;
  userArray: any = [];


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private adviceService: AdviceService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userService.getChildren().subscribe(data => this.userArray = data);
    this.getFavAdvices();
    console.log(this.userArray[0]);

  }

  getFavAdvices() {
    this.adviceService.getFavoriteAdvices(this.userArray[0].id).subscribe(data => {
      this.advices = data; console.log(data);
    });
  }
}
