import Home from "./route/home/home.component";

import { Routes, Route } from "react-router-dom";
import Authentication from "./route/authentication/authentication.component.jsx";
import Navigation from "./route/header/header.component.jsx";
import Shop from "./route/shop/shop.component.jsx";
import Checkout from "./route/checkout/checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
