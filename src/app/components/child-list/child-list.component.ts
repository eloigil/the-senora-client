import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
