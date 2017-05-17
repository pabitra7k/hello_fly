import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CheckinServiceService {

  constructor(private http: Http) { }

  getCheckInStatus(data) {
    /*var username = data.credentials.username;
     var password = data.credentials.password;*/
    var username = "Pabitra";
    var password = "Kole";

    var creds = "username=" + username + "&password=" + password;

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost:3000/newapp/checkin', creds, {
      headers: headers
    })
      .map((res: Response) => res.json());
    /*.subscribe(
     data => this.saveJwt(data.id_token),
     err => console.log(err),
     () => console.log('Check-in Complete')
     )*/
  }
  saveJwt(jwt) {
    if (jwt) {
      localStorage.setItem('id_token', jwt);
    }
  }

}
