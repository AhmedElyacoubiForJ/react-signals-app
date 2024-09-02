import { signal } from "@preact/signals-react";
import { IProductModel } from "../model/product.model.ts";

const products = signal<IProductModel[]>([
  { id: 1, name: "Computer", price: 4500, selected: false },
  { id: 2, name: "Printer", price: 2300, selected: true },
  { id: 3, name: "Smart phone", price: 1200, selected: true },
]);

const Products = () => {
  const select = (product: IProductModel) => {
    products.value = products.value.map((p) =>
      p.id === product.id ? { ...p, selected: !p.selected } : p
    );
  };
  return (
    <div>
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
