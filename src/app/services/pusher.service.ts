import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const apiUrl = environment.apiUrl;

declare const Pusher: any;


@Injectable()
export class PusherService {
  pusher: any;
  messagesChannel: any;
  http: any;


  constructor() {
    this.pusher = new Pusher('b843d151cbd14da89670', {
      authEndpoint: 'http://localhost:3001/pusher/auth',
      cluster: 'eu',
      encrypted: true
    });
    this.messagesChannel = this.pusher.subscribe('private-messages');
  }
}
