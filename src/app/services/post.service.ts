import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class PostService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  getposts(): Observable<any>{
      let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

      return this._http.get(this.url + 'post', {headers:headers});
  }

  getpost(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'post/' + id, {headers:headers});
  }

  create(token, post): Observable<any>{
    let json = JSON.stringify(post);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.post(this.url + 'post', params, {headers:headers});
  }

  delete(token, id){
    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.delete(this.url + 'post/' + id, {headers:headers});
  }

}
