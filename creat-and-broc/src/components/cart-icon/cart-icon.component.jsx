import { ReactComponent as ShoppingBagIcon } from "../../assets/shop-bag-svgrepo-com.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
	return (
		<div className='cart-icon-container'>
			<ShoppingBagIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
