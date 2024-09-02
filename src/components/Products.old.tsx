import { signal, computed } from "@preact/signals-react";
import { IProductModel } from "../model/product.model.ts";

const products = signal<IProductModel[]>([
  { id: 1, name: "Computer", price: 4500, selected: false },
  { id: 2, name: "Printer", price: 2300, selected: true },
  { id: 3, name: "Smart phone", price: 1200, selected: true },
]);

const totalPrice = computed<number>(() =>
  products.value.reduce(
    (acc, curr) => acc + (curr.selected ? curr.price : 0),
    0
  )
);

// totalPrice
// const totalPrice2 = computed<number>(() =>
//   products.value
//     .filter((p) => p.selected)
//     .reduce((sum, product) => sum + product.price, 0)
// );

const selectAll = () => {
  const productsUpdated = products.value.map((p) => ({ ...p, selected: true }));
  products.value = [...productsUpdated];
};

const numberOfProductsSelected = computed<number>(() =>
  products.value.reduce((acc, curr) => (curr.selected ? acc + 1 : acc), 0)
);

//const numberOfProductsSelected = computed<number>(() => products.value.filter(p => p.selected === true).length);

const Products = () => {
  const select = (product: IProductModel) => {
    const productsUpdated = products.value.map((p) =>
      p.id === product.id ? { ...p, selected: !p.selected } : p
    );
    products.value = [...productsUpdated];
  };
  return (
    <div className="p-3">
      <div>
        <ul className="nav nav-pills">
          <li className="btn btn-outline-info p-3 m-1">
            Total Selected Products: {numberOfProductsSelected.value}
          </li>
          <li className="btn btn-outline-info p-3 m-1">
            Total Price: {totalPrice.value}
          </li>
        </ul>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {products.value.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                {product.selected ? (
                  <button
                    onClick={() => select(product)}
                    className="btn btn-success"
                  >
                    Selected
                  </button>
                ) : (
                  <button
                    onClick={() => select(product)}
                    className="btn btn-danger"
                  >
                    Not Selected
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
