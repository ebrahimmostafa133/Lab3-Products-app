import { Injectable } from '@angular/core';
import { IProducts } from '../components/products/interfaces/products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: IProducts[] = [
        {
            id: 1,
            name: "Mechanical Keyboard K95",
            description: "RGB Backlit, Cherry MX Blue Switches",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 12
        },
        {
            id: 2,
            name: "Smart Watch Series 9",
            description: "Always-on Retina display, Blood Oxygen app",
            price: 399.00,
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 5
        },
        {
            id: 3,
            name: "Sony Alpha A7 IV",
            description: "Full-frame Mirrorless Camera, 33MP",
            price: 2499.99,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 3
        },
        {
            id: 4,
            name: "Logitech MX Master 3S",
            description: "Wireless Mouse, Ultra-quiet Scrolling",
            price: 99.00,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 45
        },
        {
            id: 5,
            name: "Dell UltraSharp 27\"",
            description: "4K USB-C Hub Monitor, IPS Black Technology",
            price: 589.99,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 10
        },
        {
            id: 6,
            name: "Portable SSD 2TB",
            description: "Fast data transfer up to 1050MB/s, Rugged",
            price: 159.50,
            image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 28
        },
        {
            id: 7,
            name: "GoPro HERO12",
            description: "Waterproof Action Camera, 5.3K Video",
            price: 349.99,
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 15
        },
        {
            id: 8,
            name: "Leather Laptop Bag",
            description: "Handcrafted Genuine Leather, Fits 15\" Laptop",
            price: 75.00,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 0
        },
        {
            id: 9,
            name: "Electric Standing Desk",
            description: "Dual Motor, Height Adjustable, Bamboo Top",
            price: 420.00,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 7
        },
        {
            id: 10,
            name: "Studio Microphone",
            description: "Cardioid Condenser, Professional Audio Recording",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 20
        },
        {
            id: 11,
            name: "PlayStation 5 Console",
            description: "Ultra-High Speed SSD, Ray Tracing, 4K Gaming",
            price: 499.99,
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 0
        },
        {
            id: 12,
            name: "Smart Coffee Maker",
            description: "Wi-Fi enabled, Programmable brewing cycles",
            price: 145.00,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 18
        },
        {
            id: 13,
            name: "Noise Cancelling Headphones",
            description: "Over-ear, 30-hour battery life, Voice Assistant",
            price: 348.00,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 25
        },
        {
            id: 14,
            name: "Ergonomic Office Chair",
            description: "Breathable mesh back with lumbar support",
            price: 289.99,
            image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 12
        },
        {
            id: 15,
            name: "Wacom Drawing Tablet",
            description: "Pressure-sensitive pen, ideal for digital art",
            price: 199.00,
            image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 0
        },
        {
            id: 16,
            name: "Echo Dot Smart Speaker",
            description: "Compact design with Alexa, Charcoal color",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 50
        },
        {
            id: 17,
            name: "DJI Mini 3 Pro",
            description: "Lightweight Foldable Camera Drone, 4K HDR",
            price: 759.00,
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 6
        },
        {
            id: 18,
            name: "External GPU Enclosure",
            description: "Thunderbolt 3 connection for laptop gaming",
            price: 299.00,
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 3
        },
        {
            id: 19,
            name: "Kindle Paperwhite",
            description: "6.8\" display, waterproof, adjustable warm light",
            price: 139.99,
            image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80",
            rating: 5,
            quantity: 30
        },
        {
            id: 20,
            name: "Smart LED Light Strips",
            description: "16 Million colors, App & Voice control",
            price: 24.50,
            image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=400&q=80",
            rating: 4,
            quantity: 0
        }
    ]

    getProducts(): IProducts[] {
        return this.products;
    }
    getProductById(id: number): IProducts | undefined {
        return this.products.find(p => p.id === id);
    }
}
