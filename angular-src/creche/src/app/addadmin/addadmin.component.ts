import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  arr;
  res;

  constructor(private register : RegisterService) { }

  ngOnInit() {
  }

  send(email,password) {
    this.arr = {
      "email" : email,
      "password" : password
    }
    this.register.addadmin(this.arr).subscribe(res => this.res = res);
  }

}
