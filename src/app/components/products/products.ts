import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from './interfaces/products';
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
  private cdr = inject(ChangeDetectorRef);
  products: Product[] = [];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response.products;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}