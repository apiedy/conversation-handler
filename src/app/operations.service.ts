import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OperationsService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders;

  getInitialService() {
    return this.http.get('http://localhost:3000/api/initialservice')
  }

  callService(service, name) {
    let token = localStorage.getItem('token');
    if(token)
      this.headers = new HttpHeaders({'access-token': token});
    else
      token = '';
    return this.http.post('http://localhost:3000/api/' + service, {name: name}, {headers: this.headers});
  }
  
  callXMLService(service, name) {
    let token = localStorage.getItem('token');
    if(token)
      this.headers = new HttpHeaders({'access-token': token});
      else
      token = '';
    return this.http.post('http://localhost:3000/api/' + service, {name: name}, {headers: this.headers, responseType: 'text'});
  }
    
  getFlow() {
    let token = localStorage.getItem('token');
    this.headers = new HttpHeaders({'access-token': token});
    return this.http.get('http://localhost:3000/api/getflow', {headers: this.headers});
  }

}
