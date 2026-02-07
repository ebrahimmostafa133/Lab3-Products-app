import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from './components/cart/cart';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { authGuard } from './guards/auth-guard.guard';
import { PageNotFount } from './components/page-not-fount/page-not-fount';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: Products, canActivate: [authGuard], runGuardsAndResolvers: 'always' },
    { path: 'products/:id', component: ProductDetails, canActivate: [authGuard] },
    { path: 'cart', component: Cart, canActivate: [authGuard] },
    { path: '**', component: PageNotFount }
];
