import { Component,OnInit } from '@angular/core';
import {McqService} from '../services/mcqService';
import { NameListService } from '../shared/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl:'mcqlist.component.html',
  styleUrls: ['mcqList.component.css'],
   providers: [McqService]
})
export class McqListComponent implements OnInit  {
    
   constructor(public fb: FormBuilder,public mcqService: McqService){
      
     
   }
 
 ngOnInit() {
   
  }

  
 }
