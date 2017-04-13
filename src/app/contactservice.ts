import {Injectable}               from '@angular/core';
import {Http, Response}           from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs/Observable';
import {Contact}                  from './contact';
import 'rxjs/add/operator/catch';
 
@Injectable()

export class ContactService {
  constructor (private _http: Http) {}
 
  private _contactUrl = 'contact.ts';
 
  postEmail(newMail: Contact): Observable<string>{
    let body = 'name=${newMail.name}&fname=${newMail.fname}&email=${newMail.email}&tel=${newMail.tel}&message=${newMail.message}';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(this._contactUrl, body, options)
                    // .map(res =>  <string> res.json())
                 .catch(this.handleError);
  }
 
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    // console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}