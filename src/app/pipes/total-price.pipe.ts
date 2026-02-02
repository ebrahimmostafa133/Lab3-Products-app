import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../components/products/interfaces/products';

@Pipe({
    name: 'totalPrice',
    standalone: true
})
export class TotalPricePipe implements PipeTransform {

    transform(items: IProducts[]): number {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

}
