import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-addchildren',
  templateUrl: './addchildren.component.html',
  styleUrls: ['./addchildren.component.css']
})
export class AddchildrenComponent implements OnInit {

  constructor( private router:Router , private register:RegisterService ) {  }
  ngOnInit() {  }
  send(email,password){
    this.register.addChildren(email,password).subscribe( res => {
      if(res.result) this.router.navigate(['/crechehome']);
    })
  }
}
