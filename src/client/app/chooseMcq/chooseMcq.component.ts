import { Component,OnInit } from '@angular/core';
import {McqService} from '../services/mcqService';
import { NameListService } from '../shared/index';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl:'choosemcq.component.html',
  styleUrls: ['chooseMcq.component.css'],
   providers: [McqService]
})
export class ChooseMcqComponent implements OnInit  {
    countryList:any=[];
    facultyList:any=[];
    specializationList:any[];
  
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
   
   onFacultyChange(event:any){
       debugger;
       let formData = this.countrySelectForm.value;
        this.mcqService.getSpecializationList(formData.selectedFaculty).subscribe(res=>{
           console.log(res);
        this.specializationList=res;
       })
   }
   
   getExams(){
       debugger;
        let formData = this.countrySelectForm.value;
       
        let searchParams = {
        "searchText":'',//formData.searchText,
        "country":"Sri Lanka",// formData.selectedCountry.name,
        "faculty":"Medicine",//formData.selectedFaculty.facultyName,
        "speciality":"Bio"// formData.selectedSpecialization.name
      }
       
       this.mcqService. getSearchResultList(searchParams).subscribe(res=>{
           debugger;
           console.log(res);
           this.router.navigate(['/mcq/mcqList']);
           
        //navigate to next
       })
      
       
   }
   
 
 ngOnInit() {
    
  this.countrySelectForm  = this.fb.group({
    selectedCountry:[''],
    selectedFaculty:[''],
    searchText:['']
    
})


  }

  
 }
