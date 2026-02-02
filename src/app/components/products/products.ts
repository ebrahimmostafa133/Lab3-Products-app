import { Component, inject, OnInit } from '@angular/core';
import { IProducts } from './interfaces/products';
import { ProductService } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productService = inject(ProductService);
  products: IProducts[] = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
