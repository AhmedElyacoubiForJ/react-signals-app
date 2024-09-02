import { computed } from "@preact/signals-react";
import { useStore } from "../store/useStore";

const DashBoard = () => {
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
      <ul className="nav nav-pills">
        <li className="btn btn-outline-info p-3 m-1">
          Total Selected Products: {numberOfProductsSelected.value}
        </li>
        <li className="btn btn-outline-info p-3 m-1">
          Total Price: {totalPrice.value}
        </li>
      </ul>
    </div>
  );
};

export default DashBoard;
