import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

//------------------------------------------------------------------------------------
@Injectable()
export class CserviceService {
  constructor(private http:HttpClient) { }

  getData(rc) {
    if (rc && rc.length > 0) {
      return this.http.get('https://restcountries.eu/rest/v2/region/' + rc);
    }
    else {
      return this.http.get('https://restcountries.eu/rest/v2/all');
    }
   }

  getUniqeValues(arr, prop) {
    return arr.map(function (e) { return e[prop]; }).filter(function (e, i, a) {
      return i === a.indexOf(e);
     });
    }

  private subject = new BehaviorSubject('');
  _gotrc = this.subject.asObservable();
  serviceRC(rc) {
      this.subject.next(rc)
    }
  }
