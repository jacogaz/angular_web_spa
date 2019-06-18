import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  register(user): Observable<any> {
    let json = JSON.stringify(user);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'register', params, { headers: headers });
  }

  sendmail(message){
    let json = JSON.stringify(message);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'mail/send', params, {headers:headers});
  }

  login(user, getToken = null): Observable<any> {
    if (getToken) {
      user.gettoken = true;
    }

    let json = JSON.stringify(user);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'login', params, { headers: headers });
  }

  update(token, user): Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put(this.url+'update', params, {headers: headers});
  }

  getidentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity) {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  gettoken() {
    let token = localStorage.getItem('token');

    if (token != null && token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  
}
