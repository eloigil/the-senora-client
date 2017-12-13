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


  getAdvices(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `/advices/${id}`, options)
      .map(res => {
        return res.json();
      });
    // .map((res: Response) => {
    //   const data = res.json();
    //   return data.map((obj) => new User(obj));
    // });
  }


  createAdvice(advice: Advice) {
    const options = new RequestOptions();
    console.log(apiUrl);
    options.withCredentials = true;

    return this.http.post(apiUrl + '/advice', advice, options)
      .map(res => {
        return res.json();
      });
  }

  updateAdvice(advice) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.put(apiUrl + '/advices/' + advice._id, advice, options)
      .map(res => {
        return res.json();
      });
  }
}
