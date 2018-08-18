import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http : HttpClient
  ) { }

  contact(array) :Observable<any> {
    return this.http.post('http://localhost:3000/contact',array).pipe(map(res => res));
  }
}
