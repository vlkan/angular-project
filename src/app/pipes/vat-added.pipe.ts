import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    //value:unitPrice its come to html value
    //rate:VatRate
    return value + (value * rate / 100);
  }

}
