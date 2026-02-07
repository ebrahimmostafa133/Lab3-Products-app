import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../products/interfaces/products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | undefined>(undefined);

  existingInCart = computed(() => {
    const p = this.product();
    if (!p) return 0;
    return this.cartService.cartItems().filter((item) => item.id === p.id).length;
  });

  remainingStock = computed(() => {
    const p = this.product();
    if (!p) return 0;
    return Math.max(0, p.stock - this.existingInCart());
  });

  isMaxReached = computed(() => {
    const p = this.product();
    if (!p) return true;
    return this.existingInCart() >= p.stock;
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductById(id);
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.product.set(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
