import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id:string = '84898b33cb8631d42e0d';
  private client_secret:string = 'e61b99dba8c6e4b16aee9c3cf149855bf6c0b6a7';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'gabeszrozsa';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'
     + this.username + '?client_id=' + this.client_id +
   '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }
}
