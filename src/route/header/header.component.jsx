import "./header.jsx";
import { ReactComponent as Logo } from "../../assets/crown .svg";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import {
  HeaderContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./header.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors.js";
import { selectIsCartOpen } from "../../store/cart/cart.selectors.js";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
        {isCartOpen && <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
