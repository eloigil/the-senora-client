import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-child-add-form',
  templateUrl: './child-add-form.component.html',
  styleUrls: ['./child-add-form.component.css']
})
export class ChildAddFormComponent implements OnInit {
  error: any;
  child: User = new User();
  childList: [User];


  @Output() onCreate = new EventEmitter<any>();

  constructor(private userService: UserService

  ) { }

  ngOnInit() {
    // getChildren list from service and sabe in childList
  }

  addChild() {
    this.userService.createChild(this.child)
      .subscribe(data => {
        this.child = new User();
        this.onCreate.emit();
      });
  }

}
