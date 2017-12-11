import { Component, OnInit } from '@angular/core';

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

  constructor(private adviceService: AdviceService) { }

  ngOnInit() {
    // getChildren from service and save in children array
  }

  createAdvice() {
    this.adviceService.createAdvice(this.advice)
      .subscribe((data) => console.log(data));
  }


}
