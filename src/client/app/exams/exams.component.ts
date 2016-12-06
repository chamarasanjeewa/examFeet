import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExamService } from '../services/examService';
import { SearchOptions } from './searchOptions';
import { Utilities } from '../utilities/utilities.propertyExtension';

@Component({
    moduleId: module.id,
    selector: 'sd-exams',
    templateUrl: 'exams.component.html',
    styleUrls: ['exams.component.css'],
    providers: [ExamService]
})

export class ExamsComponent implements OnInit {
    countries: any = [];
    faculties: any = [];
    facultySpecializations: any = [];
    exams: any = [];
    searchOptions: SearchOptions;

    // form groups
    searchForm: FormGroup;


    constructor(public fb: FormBuilder,
        public router: Router,
        public examService: ExamService) {
        console.log('controller - exams ..')

        this.searchOptions = new SearchOptions();
        this.examService.getCountries().subscribe(res => {
            debugger;
            this.countries = res.countryList;
        });
        this.examService.getFaculties().subscribe(res => {
            debugger;
            this.faculties = res;
        });
    }


    private buildSearchForm() {
        this.searchForm = this.fb.group({});

        this.searchForm.addControl(
            Utilities.PropertyExtension.getPropertyName(() => this.searchOptions.searchText),
            new FormControl(this.searchOptions.searchText));

        this.searchForm.addControl(
            Utilities.PropertyExtension.getPropertyName(() => this.searchOptions.country),
            new FormControl(this.searchOptions.country, [
                Validators.required
            ]));

        this.searchForm.addControl(
            Utilities.PropertyExtension.getPropertyName(() => this.searchOptions.faculty),
            new FormControl(this.searchOptions.faculty, [
                Validators.required
            ]));

        this.searchForm.addControl(
            Utilities.PropertyExtension.getPropertyName(() => this.searchOptions.speciality),
            new FormControl(this.searchOptions.speciality, [
                Validators.required
            ]));
    }

    loadFacultySpecializations(faculty: any) {
        debugger;
        this.examService.getFacultySpecializations(faculty.facultyId)
            .subscribe(res => { this.facultySpecializations = res.data; });
    }

    searchExams() {
        debugger;
        Object.assign(this.searchOptions, this.searchForm.value);
        this.examService.getExams(this.searchOptions.toParams()).subscribe(res => { this.exams = res; });
    }

    selectExam(exam: any) {
        sessionStorage.setItem('exam', JSON.stringify(exam));
        this.router.navigateByUrl('/exams/' + exam.serviceId);


        // debugger;
        // console.log(exam);
        // var params = {
        //     'serviceId': exam.serviceId //28
        // }

        // this.examService.getExamInfo(params).subscribe(res => {
        //     console.log('getExamInfo');
        //     console.log(res);
        // });

        // this.examService.getSampleExamQuestions(params).subscribe(res => {
        //     console.log('getSampleExamQuestions');
        //     console.log(res);
        // });



        //this.router.navigate(['/mcq/', selectedExam.serviceId]);
        // this.router.navigate(['/mcq/mcqPurchase',selectedExam.serviceId]);



    }


    ngOnInit() {
        debugger;
                console.log(' exams ..')
        this.buildSearchForm();
    }

}
