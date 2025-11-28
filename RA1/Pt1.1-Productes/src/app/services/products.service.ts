import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [];

  constructor() {}
  createProducts() {
    let fruits = ['manzana', 'melon', 'mandarina', 'naranja'];

    for (let i: number = 0; i < 300; i++) {
      let product = {
        id: i,
        name: 'descripcio' + i,
        type: fruits[Math.random() * 3],
        quantity: i * 1 - i,
      };
      this.products.push(product);
    }
  }
  getProducts(): any[] {
    this.createProducts();
    return this.products;
  }
}
