import { AddchildrenComponent } from './addchildren/addchildren.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  value;
  LoggedWho; 
  constructor ( private http : HttpClient ) { }

  setvalue(v) {
    this.value = v;
  }

  getvalue() : Observable<any> {
    if(this.value == null) {
      this.value= "abc";
    }
    return (this.value);
  }

  check(array) : Observable<any> {
    return this.http.post("http://localhost:3000/checkregister",array).pipe(map(response => response));
  }

  addgov(array) : Observable<any> {
    return this.http.post("http://localhost:3000/govregister",array).pipe(map(response => response));
  }

  addpar(array) : Observable<any> {
    return this.http.post("http://localhost:3000/parentregister",array).pipe(map(response => response));
  }

  addcre(array) : Observable<any> {
    return this.http.post("http://localhost:3000/crecheregister",array).pipe(map(response => response));
  }

  login(array) : Observable<any> {
    return this.http.post("http://localhost:3000/login",array)
    .pipe(
      tap( incomingValue => this.LoggedWho = incomingValue ),
      map( () => { return {"result":this.LoggedWho.result} } )
    );
  }

  crechelist() : Observable<any> {
    return this.http.post("http://localhost:3000/crechelist",{}).pipe(map(response => response));
  }

  addadmin(array) : Observable<any> {
    return this.http.post("http://localhost:3000/sendRegisterMail",array).pipe(map(response => response));
  }

  addcreche(array) : Observable<any> {
    return this.http.post("http://localhost:3000/sendRegisterMail",array).pipe(map(response => response));
  }

  addChildren(email,password) : Observable<any> {
    return this.http.post("http://localhost:3000/sendRegisterMail",{ "email":email , "password":password , "db":"children" , "crecheName":this.value.name , "crecheEmail":this.LoggedWho.email}).pipe(map(response => response));
  }

  addFaculty(email,password) : Observable<any> {
    return this.http.post("http://localhost:3000/sendRegisterMail",{ "email":email , "password":password , "db":"faculty" , "crecheName":this.value.name, "crecheEmail":this.LoggedWho.email }).pipe(map(response => response));
  }
}
