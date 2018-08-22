import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  constructor( private register:RegisterService , private router:Router ) { }
  ngOnInit() {  }

  send(email,password) {
    const arr = {
      "email" : email,
      "password" : password,
      "db" : "creche"
    }
    this.register.addcreche(arr).subscribe(res => {
      if(res.result) this.router.navigate(['/govhome']);
    });
  }
}
