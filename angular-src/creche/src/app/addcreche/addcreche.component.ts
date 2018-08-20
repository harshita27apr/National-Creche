import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-addcreche',
  templateUrl: './addcreche.component.html',
  styleUrls: ['./addcreche.component.css']
})
export class AddcrecheComponent implements OnInit {

  res;
  arr;

  constructor(private register : RegisterService) { }

  ngOnInit() {
  }

  send(email,password) {
    this.arr = {
      "email" : email,
      "password" : password
    }
    this.register.addcreche(this.arr).subscribe(res => this.res = res);
  }

}
