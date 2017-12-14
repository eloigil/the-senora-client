import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PusherService } from '../../services/pusher.service';

@Component({
  selector: 'app-advice-item',
  templateUrl: './advice-item.component.html',
  styleUrls: ['./advice-item.component.css']
})
export class AdviceItemComponent implements OnInit {

  messages: any;
  message: any;

  @Input() advice;
  @Output() changeFavorite = new EventEmitter();
  @Output() changeAlert = new EventEmitter();

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }
  handleClick() {
    // console.log(this.advice);
    this.changeFavorite.emit(this.advice);
  }

  handleClickRun() {
    console.log(this.advice);
    // this.changeAlert.emit(this.advice);
    this.sendMessage(this.advice);
  }

  sendMessage(message) {

    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
}

