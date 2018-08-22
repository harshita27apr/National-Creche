import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-creches',
  templateUrl: './creches.component.html',
  styleUrls: ['./creches.component.css']
})
export class CrechesComponent implements OnInit {

  arr;
  value;
  flag = true;

  constructor( private register : RegisterService ) { }
  
  ngOnInit() 
  {
    this.crechelist(); 
  }

  crechelist() {
    this.register.crechelist().subscribe(res =>{
      this.arr = res });
  }

  getgov() {
    this.register.getvalue().subscribe( res => {
      this.value = res;
      if(this.value == "Government") {
         this.flag = false;
         return true;
      }
      else return false;
    })
  }

  getpar() {
    this.register.getvalue().subscribe(res => {
      this.value = res;
      if(this.value == "Parent") {
        this.flag = false;
        return true;
      }
        else return false;
    })
  }

  getcre() {
    this.register.getvalue().subscribe(res => {
      this.value = res;
      if(this.value == "Creche") {
       this.flag = false; 
        return true;
      }
        else return false;
    })
  }

}
