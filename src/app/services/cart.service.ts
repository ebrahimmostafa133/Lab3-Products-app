import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../components/products/interfaces/products';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems = signal<Product[]>(this.loadCart());

    cartCount = computed(() => this.cartItems().length);

    private loadCart(): Product[] {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    private saveCart(items: Product[]) {
        localStorage.setItem('cart', JSON.stringify(items));
        this.cartItems.set(items);
    }

    addToCart(product: Product) {
        const current = this.cartItems();
        const existingCount = current.filter(item => item.id === product.id).length;

        if (existingCount < product.stock) {
            this.saveCart([...current, product]);
        } else {
            alert('Cannot add more items than available in stock');
        }
    }

    removeFromCart(id: number) {
        const current = this.cartItems();
        const updated = current.filter(item => item.id !== id);
        this.saveCart(updated);
    }

    decrementItem(id: number) {
        const current = this.cartItems();
        const index = current.findIndex(item => item.id === id); // Find first occurrence
        if (index !== -1) {
            const updated = [...current];
            updated.splice(index, 1);
            this.saveCart(updated);
        }
    }

    clearCart() {
        this.saveCart([]);
    }
}
