import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-advice-item',
  templateUrl: './advice-item.component.html',
  styleUrls: ['./advice-item.component.css']
})
export class AdviceItemComponent implements OnInit {
  @Input() advice;
  @Output() changeFavorite = new EventEmitter();
  @Output() changeAlert = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    // console.log(this.advice);
    this.changeFavorite.emit(this.advice);
  }
  handleClickRun() {
    // console.log(this.advice);
    this.changeAlert.emit(this.advice);
  }

}
