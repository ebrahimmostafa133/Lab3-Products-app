import { Component, Input, inject, computed } from '@angular/core';
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

  existingInCart = computed(() =>
    this.cartService.cartItems().filter((item) => item.id === this.product.id).length
  );

  isMaxReached = computed(() => this.existingInCart() >= this.product.quantity);

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
