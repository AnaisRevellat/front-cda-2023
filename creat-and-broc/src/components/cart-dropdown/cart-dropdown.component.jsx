import {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context';

//components
import Button from "../button/button.component";
import CartItem from "../cart_item/cart-item.component";

//scss
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
      </div>
			<Button>Voir le panier</Button>
		</div>
	);
};

export default CartDropdown;
