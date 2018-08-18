import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-parentregister',
  templateUrl: './parentregister.component.html',
  styleUrls: ['./parentregister.component.css']
})
export class ParentregisterComponent implements OnInit {

  arr;
  res;

  constructor(private registerservice : RegisterService) { }

  ngOnInit() {
  }

  addpar(name,email,mobile,aadhar,address,cname,age,caadhar) {
    this.arr = {
      "name" : name,
      "email" : email,
      "mobile" : mobile,
      "aadhar" : aadhar,
      "address" : address,
      "cname" : cname,
      "cage" : age,
      "caadhar" : caadhar
    }
    this.registerservice.addpar(this.arr).subscribe(res => this.res = res);
  }

}
