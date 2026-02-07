import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/products/interfaces/products';

@Pipe({
    name: 'totalPrice',
    standalone: true
})
export class TotalPricePipe implements PipeTransform {

    transform(items: Product[]): number {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

}
