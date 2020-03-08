import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    deaprtment list!
    </h3>
    <ul class = "items">
    <li (click)="onSelect(dept)" *ngFor="let dept of departments" >
    <span class = "badge">{{dept.id}}</span>{{dept.name}}

    </li>

    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1 , "name":"Angular"},
    {"id":2, "name":"Js"},
    {"id":3 , "name":"Node"},
    {"id":4 , "name":"Rubby"},
    {"id":5 , "name":"Php"}

  ];

  constructor(private router : Router) { }

  ngOnInit() {

  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}
