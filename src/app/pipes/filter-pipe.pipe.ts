import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    //means filterText is exist or not?
    return filterText ? value
      .filter((p: Product) => p.productName.toLocaleLowerCase()
        .indexOf(filterText) !== -1)
      : value;
  }

}
//map, filter
