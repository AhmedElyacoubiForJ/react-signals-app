import { computed } from "@preact/signals-react";
import { useStore } from "../store/useStore";

const Products = () => {
  const { store } = useStore();
  const numberOfProductsSelected = computed<number>(() =>
    store.products.value.reduce(
      (acc, curr) => (curr.selected ? acc + 1 : acc),
      0
    )
  );
  const totalPrice = computed<number>(() =>
    store.products.value.reduce(
      (acc, curr) => acc + (curr.selected ? curr.price : 0),
      0
    )
  );
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
          {store.products.value.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                {product.selected ? (
                  <button
                    onClick={() => store.selectProduct(product)}
                    className="btn btn-success"
                  >
                    Selected
                  </button>
                ) : (
                  <button
                    onClick={() => store.selectProduct(product)}
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
