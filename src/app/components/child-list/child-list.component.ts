import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input() user;
  @Output() onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(child) {
    this.onDelete.emit(child);
  }

}
