import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Favorites from "../components/Favorites";
import NotFound from "../components/NotFound";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Shop from "../components/Shop";
import Deals from "../components/Deals";
import Account from "../components/Account";
import ProductsDetalis from "../components/ProductsDetalis";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productDetails/:id" element={<Favorites />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/Product/:id" element={<ProductsDetalis />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
  );
}
