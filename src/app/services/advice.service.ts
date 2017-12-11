import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


import { environment } from '../../environments/environment';
import { Advice } from '../models/advice.model';

const apiUrl = environment.apiUrl;

@Injectable()
export class AdviceService {

  private advice: Advice;

  constructor(private http: Http) { }



  createAdvice(advice: Advice) {
    const options = new RequestOptions();
    console.log(apiUrl);
    options.withCredentials = true;

    return this.http.post(apiUrl + '/advice', advice, options)
      .map(res => {
        return res.json();
      });
  }
}
