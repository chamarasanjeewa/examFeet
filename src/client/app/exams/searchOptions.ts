import { Injectable } from '@angular/core';
import { Utilities } from '../utilities/utilities.propertyExtension';


export class SearchOptions {
    searchText: string = '';
    country: any = {};
    faculty: any = {};
    speciality: any = {};

    constructor() { }

    toParams() {
        var result: any = {};
        result[Utilities.PropertyExtension.getPropertyName(() => this.searchText)] = !this.searchText ? '' : this.searchText;
        result[Utilities.PropertyExtension.getPropertyName(() => this.country)] = !this.country ? '' : this.country.name;
        result[Utilities.PropertyExtension.getPropertyName(() => this.faculty)] = !this.faculty ? '' : this.faculty.facultyName;
        result[Utilities.PropertyExtension.getPropertyName(() => this.speciality)] = !this.speciality ? '' : this.speciality.name;

        return result;
    }
}