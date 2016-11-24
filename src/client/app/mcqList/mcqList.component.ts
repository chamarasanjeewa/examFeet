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
    id:any;
    sub: any;
    selectedExam:any;
    monthsList=[
    {id:1, value: "1 Month"},
    {id:2, value: "2 Months"},
    {id:3, value: "3 Months"},
    {id:4, value: "4 Months"},
    {id:5, value: "5 Months"},
    {id:6, value: "6 Months"},
    {id:7, value: "7 Months"},
    {id:8, value: "8 Months"},
    {id:9, value: "9 Months"},
    {id:10, value: "10 Months"},
    {id:11, value: "11 Months"},
    {id:12, value: "12 Months"}
    ];
    selectedExamMonth:any;
    examSubscriptionPrice:any;
    examPerMonthPrice:any;
   constructor(public fb: FormBuilder,public mcqService: McqService,private route:ActivatedRoute){
      
     
   }
 
 calculateExamPrice(selectedExamMonth:any){
   this.selectedExamMonth=selectedExamMonth;
   	this.examSubscriptionPrice=this.examPerMonthPrice*selectedExamMonth.id;//$stateParams.selectedExam.price* $scope.numberOfMonths;

   }
 
 ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
        
       this.id = +params['id']; 
       this.mcqService.getQuestionsByServiceId(this.id).subscribe(selectedMcq=>{
           
           this.selectedExam=selectedMcq;
       },error=>{
           
       },()=>{})
    });

  
 }
}
