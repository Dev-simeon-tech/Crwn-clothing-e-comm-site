import { Outlet, Link } from "react-router";
import { Fragment } from "react";

import { ReactComponent as Crwnlogo } from "../../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header className='navigation'>
        <Link className='logo-container' to='/'>
          <Crwnlogo className='logo' />
        </Link>
        <nav className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
