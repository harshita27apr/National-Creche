import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  arr;
  res;

  constructor(private register : RegisterService) { }

  ngOnInit() 
  {
    this.facultylist(); 
  }

  facultylist() {
    this.register.facultylist().subscribe(res =>{
      this.arr = res });
  }
}
