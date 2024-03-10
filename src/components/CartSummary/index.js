import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartLength = cartList.length
      let totalPrice = 0
      cartList.forEach(item => {
        totalPrice += item.price * item.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1 className="cart-summary-heading">
              Order Total:{' '}
              <span className="cart-summary-totalPrice">Rs {totalPrice}/-</span>
            </h1>
            <p className="cart-summary-para"> {cartLength} items in cart</p>
            <button className="cart-summary-btn">Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
