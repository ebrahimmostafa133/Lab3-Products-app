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
        const existingCount = current.filter(item => item.id === product.id).length;

        if (existingCount < product.quantity) {
            this.saveCart([...current, product]);
        } else {
            alert('Cannot add more items than available in stock');
        }
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
