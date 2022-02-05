// Components
import CartItem from '../CartItem/CartItem'
import CloseIcon from '@material-ui/icons/Close';
// Styles
import { StyledButton, Wrapper } from './Cart.styles'
// Types
import { CartItemType } from '../App'

type Props = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
  setOpenCart: (openCart: boolean) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, setOpenCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>Yout shopping cart</h2>

      <StyledButton onClick={() => setOpenCart(false)}>
        <CloseIcon/>
      </StyledButton>

      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart
