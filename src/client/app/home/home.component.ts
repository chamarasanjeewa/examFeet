import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
   host: {'class': 'home'}
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    
  }
}
