import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AdviceService } from '../../services/advice.service';
import { Advice } from '../../models/advice.model';

@Component({
  selector: 'app-page-advice-new',
  templateUrl: './page-advice-new.component.html',
  styleUrls: ['./page-advice-new.component.css']
})
export class PageAdviceNewComponent implements OnInit {

  children = [];
  advice: Advice = new Advice({
    title: null,
    voice: null,
    text: null
  });

  constructor(
    private adviceService: AdviceService,
    private userService: UserService
  ) { }

  user = [];

  ngOnInit() {
    this.userService.getChildren().subscribe(data => this.user = data);

    // getChildren from service and save in children array
  }

  createAdvice() {
    this.adviceService.createAdvice(this.advice)
      .subscribe((data) => console.log(data));
  }


}
