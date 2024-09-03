import { effect, signal } from "@preact/signals-react";
import { IProductModel } from "../model/product.model";

export class Store {
  // properties
  products = signal<IProductModel[]>(this.loadState());
  sequence: number;

  // load data from local storage
  loadState() {
    const data = localStorage.getItem("my-store");
    if (data == undefined || data.length == 0) {
      const prods = [
        { id: 1, name: "Computer", price: 4500, selected: false },
        { id: 2, name: "Printer", price: 2300, selected: true },
        { id: 3, name: "Smart phone", price: 1200, selected: true },
      ];
      this.sequence = prods.length;
      return prods;
    } else {
      const prods = data !== null ? JSON.parse(data) : [];
      this.sequence = prods.length;
      return prods;
    }
  }

  // constructor
  constructor() {
    effect(() => {
      localStorage.setItem("my-store", JSON.stringify(this.products.value));
    });
  }

  // methods
  // select product
  selectProduct = (product: IProductModel) => {
    const productsUpdated = this.products.value.map((p) =>
      p.id === product.id ? { ...p, selected: !p.selected } : p
    );
    this.products.value = [...productsUpdated];
  };
  // delete product
  deleteProduct = (productId: number) => {
    const productsUpdated = this.products.value.filter(
      (p) => p.id !== productId
    );
    this.products.value = [...productsUpdated];
  };
  // add product
  addProduct = (product: IProductModel) => {
    //const productWithId = { ...product, id: ++this.sequence };
    const productWithId = {...product, id: this.getProductNextId() };
    this.products.value = [...this.products.value, productWithId];
  };

  private getProductNextId = () => {
    const maxId = Math.max(...this.products.value.map((p) => p.id));
    return maxId + 1;
  }
}

export const store = new Store();
