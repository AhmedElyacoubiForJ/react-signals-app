import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import DashBoard from "../src/components/DashBoard";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <div className="container">
      <DashBoard />
      <AddProduct />
      <Products />
    </div>
  );
}

export default App;
