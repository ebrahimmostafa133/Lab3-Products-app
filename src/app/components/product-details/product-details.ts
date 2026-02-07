import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { IProducts } from '../products/interfaces/products';

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

  product = signal<IProducts | undefined>(undefined);

  existingInCart = computed(() => {
    const p = this.product();
    if (!p) return 0;
    return this.cartService.cartItems().filter((item) => item.id === p.id).length;
  });

  isMaxReached = computed(() => {
    const p = this.product();
    if (!p) return true;
    return this.existingInCart() >= p.quantity;
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    this.product.set(foundProduct);
  }

  addToCart(product: IProducts) {
    this.cartService.addToCart(product);
  }
}
