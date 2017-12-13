import { Component, OnInit, Input } from '@angular/core';
import { AdviceItemComponent } from '../../components/advice-item/advice-item.component';


@Component({
  selector: 'app-advice-list',
  templateUrl: './advice-list.component.html',
  styleUrls: ['./advice-list.component.css']
})
export class AdviceListComponent implements OnInit {

  // something missing
  @Input() advices: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
