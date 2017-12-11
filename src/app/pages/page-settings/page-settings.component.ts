import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

  constructor(private userService: UserService) { }

  children = [];

  ngOnInit() {
    this.userService.getChildren().subscribe(data => this.children = data);
    // getChildren from service and save in children
  }

}
