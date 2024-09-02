import { signal } from "@preact/signals-react";
import { IProductModel } from "../model/product.model";

export class Store {
  // properties
  products = signal<IProductModel[]>([
    { id: 1, name: "Computer", price: 4500, selected: false },
    { id: 2, name: "Printer", price: 2300, selected: true },
    { id: 3, name: "Smart phone", price: 1200, selected: true },
  ]);

  // methods
  // select product
  selectProduct = (product: IProductModel) => {
    const productsUpdated = this.products.value.map((p) =>
      p.id === product.id ? { ...p, selected: !p.selected } : p
    );
    this.products.value = [...productsUpdated];
  };
  // delete products
  deleteProduct = (productId: number) => {
    const productsUpdated = this.products.value.filter(
      (p) => p.id !== productId
    );
    this.products.value = [...productsUpdated];
  };
  // add product
  addProduct = (product: IProductModel) => {
    const productsUpdated = [...this.products.value, product];
    this.products.value = [...productsUpdated];
  };
  getNextId() {
    const maxId = Math.max(...this.products.value.map((p) => p.id));
    return maxId + 1;
  }
}

export const store = new Store();
