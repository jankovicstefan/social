import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from 'app/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  public users : Observable<User[]>;

  constructor(private _http:Http) { 
   
   }
   
   getData() : Observable<User[]> {
    return this._http.get('data.json').map(res => res.json());
   }
 
}
