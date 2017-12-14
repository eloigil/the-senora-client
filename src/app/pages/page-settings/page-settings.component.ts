import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

  constructor(private userService: UserService) { }

  user = [];

  ngOnInit() {
    this.userService.getChildren().subscribe(data => this.user = data);
    // getChildren from service and save in children
  }

  handleDelete(child) {
    this.userService.deleteChild(child._id)
      .subscribe((result) => {
        this.userService.getChildren().subscribe(data => this.user = data);
      },
      (err) => console.log(err));
  }

  handleCreate() {

    this.userService.getChildren().subscribe(data => this.user = data);
  }

}
