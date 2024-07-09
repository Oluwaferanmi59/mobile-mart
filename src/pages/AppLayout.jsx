import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Outlet />
      <Categories />
      <Card />
      <Footer />
    </div>
  );
}

export default AppLayout;
