//component
import Button from "../button/button.component";

//scss
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>Voir le panier</Button>
		</div>
	);
};

export default CartDropdown;
