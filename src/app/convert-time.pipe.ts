import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: any): any {
    value = value.split(',').join('')
    let seconds: number;
    let minutes: number;
    if (+value <= 59) {
      return value + 's';
    } else {
      seconds = +value - (Math.floor(+value / 60) * 60)
      minutes = Math.floor(+value/60);
      if (seconds === 0) {
        return minutes + 'm ';
      } else {
        return minutes + 'm ' +  seconds + 's';
      }
    }
  }

}
