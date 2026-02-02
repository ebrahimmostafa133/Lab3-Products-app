import { Injectable, signal, computed } from '@angular/core';
import { IProducts } from '../components/products/interfaces/products';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems = signal<IProducts[]>(this.loadCart());

    cartCount = computed(() => this.cartItems().length);

    private loadCart(): IProducts[] {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    private saveCart(items: IProducts[]) {
        localStorage.setItem('cart', JSON.stringify(items));
        this.cartItems.set(items);
    }

    addToCart(product: IProducts) {
        const current = this.cartItems();
        this.saveCart([...current, product]);
    }

    removeFromCart(index: number) {
        const current = this.cartItems();
        const updated = current.filter((_, i) => i !== index);
        this.saveCart(updated);
    }

    clearCart() {
        this.saveCart([]);
    }
}
