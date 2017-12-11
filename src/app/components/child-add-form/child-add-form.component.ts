import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-child-add-form',
  templateUrl: './child-add-form.component.html',
  styleUrls: ['./child-add-form.component.css']
})
export class ChildAddFormComponent implements OnInit {

  child: User = new User();
  childList: [User];

  constructor(private userService: UserService

  ) { }

  ngOnInit() {
    // getChildren list from service and sabe in childList
  }

  addChild() {
    this.userService.createChild(this.child)
      .subscribe(data => console.log(data));
  }

}
