import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuthenticated = signal<boolean>(this.checkAuth());

    constructor(private router: Router) { }

    private checkAuth(): boolean {
        return !!localStorage.getItem('token');
    }

    login(email: string) {
        localStorage.setItem('token', btoa(email));
        this.isAuthenticated.set(true);
        this.router.navigate(['/products']);
    }

    register(email: string) {
        localStorage.setItem('token', btoa(email));
        this.isAuthenticated.set(true);
        this.router.navigate(['/products']);
    }

    logout() {
        localStorage.removeItem('token');
        this.isAuthenticated.set(false);
        this.router.navigate(['/login']);
    }
}
