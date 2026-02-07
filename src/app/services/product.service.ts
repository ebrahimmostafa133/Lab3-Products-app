import { inject, Injectable } from '@angular/core';
import { IProducts, Product } from '../components/products/interfaces/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly httpClient = inject(HttpClient);
    getAllProducts() {
        return this.httpClient.get<IProducts>('https://dummyjson.com/products');
    }
    getProductById(id: number) {
        return this.httpClient.get<Product>(`https://dummyjson.com/products/${id}`);
    }
}
