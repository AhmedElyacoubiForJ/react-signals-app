import { computed, signal } from "@preact/signals-react";

//const price = signal<number>(12000);
const price = 3400
const quantity = signal<number>(100);
const totalPrice = computed<number>(() => price * quantity.value);

const Products = () => {
  return (
    <div className="p-3">
      <ul className="list-group">
        <li className="list-group-item">Price : {price}</li>
        <li className="list-group-item">
          Quantity : {quantity.value}
          <button
            className="btn btn-outline-primary p-1 m-1"
            onClick={() => quantity.value--}
          >
            -
          </button>
          <button
            className="btn btn-outline-primary p-1 m-1"
            onClick={() => quantity.value++}
          >
            +
          </button>
        </li>
        <li className="list-group-item">Total Price: {totalPrice.value}</li>
      </ul>
    </div>
  );
};

export default Products;
