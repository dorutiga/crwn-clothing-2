import "./header.jsx";
import { ReactComponent as Logo } from "../../assets/crown .svg";
import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart.context";
import {
  HeaderContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./header.jsx";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpened && <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
