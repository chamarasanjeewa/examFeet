import { Component,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit {
    menuVisible:boolean;
    toggle(){
        this.menuVisible=!this.menuVisible;
    }
    
    ngOnInit() {
this.menuVisible=true;

   }

 }
