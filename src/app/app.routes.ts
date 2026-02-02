import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from './components/cart/cart';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { authGuard } from './guards/auth-guard.guard';
import { PageNotFount } from './components/page-not-fount/page-not-fount';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'products', component: Products, canActivate: [authGuard] },
    { path: 'products/:id', component: ProductDetails, canActivate: [authGuard] },
    { path: 'cart', component: Cart, canActivate: [authGuard] },
    { path: '**', component: PageNotFount }
];
