import { useContext } from 'react';

import shoppingIcon from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <img src={shoppingIcon} alt="shopping bag" className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )

}

export default CartIcon;

/// Finished at Toogle Cart Open 5:23