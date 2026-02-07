import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TotalPricePipe } from '../../pipes/total-price.pipe';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Product } from '../products/interfaces/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TotalPricePipe, RouterLink, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);

  groupedItems = computed(() => {
    const items = this.cartService.cartItems();
    const grouped = new Map<number, { product: Product, quantity: number }>();

    items.forEach(item => {
      if (grouped.has(item.id)) {
        grouped.get(item.id)!.quantity++;
      } else {
        grouped.set(item.id, { product: item, quantity: 1 });
      }
    });

    return Array.from(grouped.values());
  });

  increment(product: Product) {
    this.cartService.addToCart(product);
  }

  decrement(id: number) {
    this.cartService.decrementItem(id);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
