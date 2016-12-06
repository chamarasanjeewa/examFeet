import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sd-exams-home',
    templateUrl: 'exams.home.component.html'
})

export class ExamsHomeomponent implements OnInit {
    constructor() {
        console.log(' constructor :- exams hoome ..')

    }

    ngOnInit() {
        debugger;
        console.log(' exams hoome ..')
    }

}
