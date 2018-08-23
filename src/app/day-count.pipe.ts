import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInADay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dayCounter = dateDifferenceSeconds / secondsInADay;
    if (dayCounter >= 1) {
      return dayCounter;
    } else {
      return 0;
    }
  }

}
