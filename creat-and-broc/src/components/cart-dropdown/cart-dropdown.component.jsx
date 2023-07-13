//components
import Button from "../button/button.component";
import cartItem from "../cart_item/cart-item.component";

//scss
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
        {}
      </div>
			<Button>Voir le panier</Button>
		</div>
	);
};

export default CartDropdown;
