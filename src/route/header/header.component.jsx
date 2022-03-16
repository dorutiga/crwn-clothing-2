import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown .svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Header;
