import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
  return(
    <div>
      <ShoppingBagIcon />
      <span></span>
    </div>
  )

}

export default CartIcon;