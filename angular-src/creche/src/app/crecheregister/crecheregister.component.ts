import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-crecheregister',
  templateUrl: './crecheregister.component.html',
  styleUrls: ['./crecheregister.component.css']
})
export class CrecheregisterComponent implements OnInit {

  res;
  arr;

  constructor(private registerservice : RegisterService) { }

  ngOnInit() {
  }

  addcre(name,cname,email,mobile,description,aadhar,address) {
    this.arr = {
      "name" : name,
      "cname" : cname,
      "email" : email,
      "mobile" : mobile,
      "description" : description,
      "aadhar" : aadhar,
      "address" : address
    }
  this.registerservice.addcre(this.arr).subscribe(res => this.res = res)
  }

}
