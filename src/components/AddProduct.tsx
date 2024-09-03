import { useState } from "react";
import { useStore } from "../store/useStore";
import { IProductModel } from "../model/product.model";

const AddProduct = () => {
  const { store } = useStore();
  const [product, setProduct] = useState<IProductModel>({
    id: 0,
    name: "",
    price: 0,
    selected: false,
  });

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.addProduct(product);
    setProduct({ id: 0, name: "", price: 0, selected: false });
  };

  return (
    <div className="p-3">
      <form action="form" onSubmit={save}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Selected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  className="form-control"
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  required
                />
              </td>

              <td>
                <input
                  className="form-control"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: parseFloat(e.target.value),
                    })
                  }
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Enter product price"
                  value={product.price}
                  required
                />
              </td>
              <td>
                <input
                  className="form-check-input"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      selected: Boolean(e.target.value),
                    })
                  }
                  type="checkbox"
                  id="selected"
                  name="selected"
                />
              </td>
              <td>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddProduct;
