import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg;
  res;

  constructor(private registerservice : RegisterService,
  private router : Router) {
   }

  ngOnInit() {
  }

  register(email,opassword,newpassword,radio) {
    this.reg = {
      "email" : email,
      "password" : opassword,
      "npassword" : newpassword,
      "radio" : radio 
    }
    this.registerservice.check(this.reg).subscribe(res => {this.res = res
      if(radio == "Government" && this.res.result == true) {
        this.router.navigate(['/governmentregister']);
      }
      else if (radio == "Parent" && this.res.result == true) {
        this.router.navigate(['/parentregister'])
      }
      else if (radio == "Creche" && this.res.result == true) {
        this.router.navigate(['/crecheregister'])
      }
    })
  }

}
