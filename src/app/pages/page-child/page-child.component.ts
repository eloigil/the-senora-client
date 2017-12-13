import { Component, OnInit, } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { AdviceService } from '../../services/advice.service';
import { UserService } from '../../services/user.service';

import { AdviceListComponent } from '../../components/advice-list/advice-list.component';


@Component({
  selector: 'app-page-child',
  templateUrl: './page-child.component.html',
  styleUrls: ['./page-child.component.css']
})
export class PageChildComponent implements OnInit {

  id: any;
  userData: any;
  advices: any;

  constructor(
    private adviceService: AdviceService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idUser();
    this.getUser();
    this.getAdvices();


  }
  idUser() {
    this.activatedRoute.params.subscribe(params => { this.id = params['id']; });
  }
  getUser() {
    this.userService.getChildById(this.id).subscribe(data => { this.userData = data; });
  }
  getAdvices() {
    this.adviceService.getAdvices(this.id).subscribe(data => { this.advices = data; });
  }

  handleOnChange(advice) {
    this.adviceService.updateAdvice(advice)
      .subscribe((elem) => {
        this.adviceService.getAdvices(this.id).subscribe(data => { this.advices = data; });
      });
  }
}

