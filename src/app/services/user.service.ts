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

@Injectable()
export class UserService {

  constructor(
    private http: Http) {
  }

  createChild(child: User) {
    const options = new RequestOptions();
    console.log(apiUrl);
    options.withCredentials = true;

    return this.http.post(apiUrl + '/user/child', child, options)
      .map(res => {
        return res.json();
      });
  }

  getChildren() {
    const options = new RequestOptions();
    options.withCredentials = true;
    // console.log('got');

    return this.http.get(apiUrl + '/user/children', options)
      .map(res => {
        return res.json();
      });
    // .map((res: Response) => {
    //   const data = res.json();
    //   return data.map((obj) => new User(obj));
    // });
  }

  getChildById(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    // console.log('got');

    return this.http.get(apiUrl + `/user/${id}`, options)
      .map(res => {
        return res.json();
      });
    // .map((res: Response) => {
    //   const data = res.json();
    //   return data.map((obj) => new User(obj));
    // });
  }

  deleteChild(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.delete(apiUrl + `/user/${id}`, options)
      .map(res => {
        return res.json();
      });
  }
}
