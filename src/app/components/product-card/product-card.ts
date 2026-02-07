import { Component, Input, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../products/interfaces/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  cartService = inject(CartService);

  existingInCart = computed(() =>
    this.cartService.cartItems().filter((item) => item.id === this.product.id).length
  );

  isMaxReached = computed(() => this.existingInCart() >= this.product.stock);

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
