import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuthenticated = signal<boolean>(this.checkAuth());

    private readonly router = inject(Router);

    private checkAuth(): boolean {
        return !!localStorage.getItem('token');
    }

    login(user: any): boolean {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find((u: any) => u.email === user.email && u.password === user.password);

        if (foundUser) {
            localStorage.setItem('token', btoa(user.email));
            this.isAuthenticated.set(true);
            this.router.navigate(['/products']);
            return true;
        }
        return false;
    }

    register(user: any) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    logout() {
        localStorage.removeItem('token');
        this.isAuthenticated.set(false);
        this.router.navigate(['/login']);
    }
}
