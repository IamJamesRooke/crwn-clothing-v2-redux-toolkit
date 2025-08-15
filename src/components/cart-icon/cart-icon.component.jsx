import { useContext } from 'react';

import shoppingIcon from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context';

import { 
  CartIconContainer, 
  ShoppingIcon, 
  ItemCount 
} from './cart-icon.styles';

const CartIcon = () => {
    
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={shoppingIcon} alt="shopping bag" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;