import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdviceItemComponent } from '../../components/advice-item/advice-item.component';


@Component({
  selector: 'app-advice-list',
  templateUrl: './advice-list.component.html',
  styleUrls: ['./advice-list.component.css']
})
export class AdviceListComponent implements OnInit {
  id: string;
  // something missing
  @Input() advices: Array<any>;
  @Output() onChangeAdvice = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeFavorite(advice) {
    this.onChangeAdvice.emit(advice);
  }

}
