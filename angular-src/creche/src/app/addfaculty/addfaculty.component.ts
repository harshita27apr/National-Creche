import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  res;

  constructor( private register : RegisterService) { }

  ngOnInit() {
  }

  addfac(name,email,aadhar,mobile,address) {
    this.register.addFaculty(name,email,aadhar,mobile,address).subscribe(res => this.res =res)
  }

}
