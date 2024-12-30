import { Outlet, Link } from "react-router";
import { Fragment, useContext } from "react";

import { ReactComponent as Crwnlogo } from "../../../assets/crown.svg";

import "./navigation.styles.scss";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../card-dropdown/card-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
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
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
