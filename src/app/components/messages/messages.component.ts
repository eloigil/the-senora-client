import { Component, OnInit, Input } from '@angular/core';

import { PusherService } from '../../services/pusher.service';

interface Message {
  text: string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any;
  message: any;

  @Input() user: any;

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }
  sendMessage(message) {

    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message.findById);

  }

}
