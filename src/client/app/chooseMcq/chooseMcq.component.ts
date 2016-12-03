import { Component,OnInit } from '@angular/core';
import {McqService} from '../services/mcqService';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpService} from '../services/httpService';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl:'choosemcq.component.html',
  styleUrls: ['chooseMcq.component.css'],
   providers: [McqService,HttpService]
})
export class ChooseMcqComponent implements OnInit  {
    countryList:any=[];
    facultyList:any=[];
    specializationList:any[];
    selectedMcqList:any[];
  
    countrySelectForm: FormGroup;
   constructor(public fb: FormBuilder, public router: Router,public mcqService: McqService){
      
       this.mcqService.getCountryList().subscribe(res=>{
           console.log(res);
        this.countryList=res.countryList;
       })
       
        this.mcqService.getFacultyList().subscribe(res=>{
           console.log(res);
        this.facultyList=res;
       })
   }
   
   onFacultyChange(selectedFac:any){
   
        this.mcqService.getSpecializationList(selectedFac.facultyId).subscribe(res=>{
           console.log(res);
        this.specializationList=res.data;
       })
   }
   
   getExams(){
      
        let formData = this.countrySelectForm.value;
       
        let searchParams = {
        "searchText":formData.searchText,
        "country": formData.selectedCountry.name,
        "faculty":formData.selectedFaculty.facultyName,
        "speciality": formData.selectedSpecialization.name
      }
       
       this.mcqService. getSearchResultList(searchParams).subscribe(res=>{
          
           console.log(res);
           this.selectedMcqList=res;
          // this.router.navigate(['/mcq/mcqList']);
       })
      
       
   }
   
   navigateToSelectedExam(selectedExam:any){
       debugger;
       this.router.navigate(['/mcq/mcqList',selectedExam.serviceId]);
   }
   
 
 ngOnInit() {
    
  this.countrySelectForm  = this.fb.group({
    selectedCountry:[''],
    selectedFaculty:[''],
    selectedSpecialization:[''],
    searchText:['']
    
})


  }

  
 }
