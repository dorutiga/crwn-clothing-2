import Home from "./route/home/home.component";

import { Routes, Route } from "react-router-dom";
import Authentication from "./route/authentication/authentication.component.jsx";
import Navigation from "./route/header/header.component.jsx";
import Shop from "./route/shop/shop.component.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
