import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcreche',
  templateUrl: './addcreche.component.html',
  styleUrls: ['./addcreche.component.css']
})
export class AddcrecheComponent implements OnInit {
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
