import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';

import crownSvg from '../../assets/crown.svg'

import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <img src={crownSvg} alt="Crown Logo" className='logo' />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                Sign In
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;