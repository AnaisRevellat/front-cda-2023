import './cart-item.styles.scss'

const cartItem = ({cartItem}) => {
  const {id, name, quantity} = cartItem;
return (
  <div>
    <h2>{name}</h2>
    <span>{quantity}</span>
  </div>
)
}

export default cartItem;