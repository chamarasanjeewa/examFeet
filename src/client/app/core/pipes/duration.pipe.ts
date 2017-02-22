import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts miiliseconds to HH : mm : ss
 * Usage:
 *   value | seperator
 * Example:
 *   {{ 90000 |  seperator:':'}}
 *   formats to: 00 : 01 : 30
*/
@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

    private SECONDS_IN_MINUTE: number = 60;
    private MINUTES_IN_HOUR: number = 60;
    private MILLISECONDS_IN_SECOND: number = 1000;
    private MILLISECONDS_IN_MINUTE: number = this.MILLISECONDS_IN_SECOND * this.SECONDS_IN_MINUTE;
    private MILLISECONDS_IN_HOUR: number = this.MILLISECONDS_IN_MINUTE * this.MINUTES_IN_HOUR;
    private MINIMUM_DIGITS: number = 2;

    transform(value: number, seperator?: string): string {
        let _value = value || 0;
        let _seperator = seperator || ' : ';

        var hours = (_value / this.MILLISECONDS_IN_HOUR) | 0;
        _value = (_value % this.MILLISECONDS_IN_HOUR);//  * this.MILLISECONDS_IN_HOUR; 

        var minutes = (_value / this.MILLISECONDS_IN_MINUTE) | 0;
        _value = (_value % this.MILLISECONDS_IN_MINUTE); // * this.MILLISECONDS_IN_MINUTE; 

        var seconds = (_value / this.MILLISECONDS_IN_SECOND) | 0;
        _value = (_value % this.MILLISECONDS_IN_SECOND); // * this.MILLISECONDS_IN_SECOND; 

        var milliseconds = _value;

        return [hours, minutes, seconds]
            .map(elm => {
                return elm.toString().padStart(this.MINIMUM_DIGITS, '0');
            })
            .join(_seperator);
    }
}