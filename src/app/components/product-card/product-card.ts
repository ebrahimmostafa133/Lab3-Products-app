import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProducts } from '../products/interfaces/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: IProducts;
  cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
