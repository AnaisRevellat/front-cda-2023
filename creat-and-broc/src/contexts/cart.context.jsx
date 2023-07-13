import { createContext, useState } from "react";

//receiving the cart item array
const addCartItem = (cartItems, productToAdd) => {
	/*find is used here to find an existing product if it exists
  we use a boolean value thanks to the callback */
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	//handling the case of a new product coming with the quantity field
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	//whenever a user click on add to cart
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { isCartOpen, setIsCartOpen };
	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
};
