import { useStore } from "../store/useStore";
import AddProduct from "./AddProduct";

const Products = () => {
  const { store } = useStore();

  return (
    <div className="p-3">
      <AddProduct />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Selected</th>
            <th>Actions</th>
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
              <td>
                <button
                  onClick={() => store.deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
