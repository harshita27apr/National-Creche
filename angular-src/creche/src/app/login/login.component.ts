import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  arr;
  res;

  constructor(private register : RegisterService) { }

  ngOnInit() {
  }

  loginUser(email,pass,radio) {
    this.arr = {
      "email" : email,
      "pasword" : pass,
      "radio" : radio
     }
     this.register.login(this.arr).subscribe(res => this.res =res);
  }

}
