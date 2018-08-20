import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-creches',
  templateUrl: './creches.component.html',
  styleUrls: ['./creches.component.css']
})
export class CrechesComponent implements OnInit {

  arr;

  constructor(private register : RegisterService) { }

  ngOnInit() {
    this.crechelist();
  }

  crechelist() {
    this.register.crechelist().subscribe(arr => this.arr = arr);
  }

}
