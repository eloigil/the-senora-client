import { Component, OnInit, } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AdviceService } from '../../services/advice.service';

import { User } from '../../models/user.model';
import { Advice } from '../../models/advice.model';

import { AdviceListComponent } from '../../components/advice-list/advice-list.component';



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
  error: string;
  children: any = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private adviceService: AdviceService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.getUserAuth();
    this.getUserArray();
  }
  getUserAuth() {
    this.user = this.authService.getUser();
  }
  getUserArray() {
    this.userService.getChildren().subscribe(data => {
      this.userArray = data;
      this.getFavoritesAdvices();
    });

  }
  getFavoritesAdvices() {
    this.userArray[0].children.forEach((elem, i) => {
      this.children.push(elem);
      this.adviceService.getFavoriteAdvices(elem._id).subscribe(result => {
        this.children[i].advices = result;
      });
    });

  }
  logout() {
    this.error = null;
    this.authService.logout()
      .subscribe(
      () => this.router.navigate(['/auth']),
      (err) => this.error = err
      );
  }
  refresh(): void {
    window.location.reload();
  }

}
