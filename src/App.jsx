// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Categories from "./components/Categories";
// import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Pay from "./components/Pay";
import AppLayout from "./pages/AppLayout";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {" "}
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="pay" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
