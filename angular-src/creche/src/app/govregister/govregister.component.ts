import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-govregister',
  templateUrl: './govregister.component.html',
  styleUrls: ['./govregister.component.css']
})
export class GovregisterComponent implements OnInit {

  res;
  arr;

  constructor( private registerservice : RegisterService) { }

  ngOnInit() {
  }

  addgov(name,email,mobile,designation,department,aadhar,address) {
    this.arr = {
      "name" : name,
      "mobile" : mobile,
      "email" : email,
      "designation" : designation,
      "department" : department,
      "aadhar" : aadhar,
      "address" : address
    }
    this.registerservice.addgov(this.arr).subscribe(res => this.res = res);
  }

}
