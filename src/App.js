import Home from "./route/home/home.component";
import Header from "./route/header/header.component.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./route/singin/signin.component";
const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
