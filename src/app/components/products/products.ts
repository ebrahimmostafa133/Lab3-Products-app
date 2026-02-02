import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProducts } from './interfaces/products';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productService = inject(ProductService);
  cartService = inject(CartService);
  products: IProducts[] = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: IProducts) {
    this.cartService.addToCart(product);
  }
}
