import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';  // for debugging
import 'rxjs/add/operator/catch';

import { AboutItem } from '../about-item';

@Injectable()
export class JsonFilesService{
  //private aboutDataUrl ='../../assets/data/about-data.json';

  constructor(private http: Http) { }

  getAbouts(): Observable<AboutItem[]> {
    return this.http
      .get('assets/data/about-data.json')
      .map(res => res.json())
      .do(data => console.log('about-data.json:', JSON.stringify(data)))  // debug
      .catch(this.handleError);      ;
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }  

}

