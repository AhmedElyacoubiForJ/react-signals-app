import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import DashBoard from "../src/components/DashBoard";
import Product from "./components/Product";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <DashBoard />
        <Routes>
          <Route path="/home" element={<Product />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
