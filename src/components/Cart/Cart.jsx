import { totalPrice } from '../../units/total-price'
import Button from '../Button/Button'
import './Cart.css'

const Cart = ({cartItems, onCheckout}) => {
  return (
    <div className='cart__container'>
        <p>Umumiy narx: {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}</p>

        <Button 
          type={"checkout"} 
          title={`${cartItems == 0 ? "Buyurtma berish" : "Tolov"}`} 
          disable={cartItems.length == 0 ? true : false}
          onClick={onCheckout}
          />
    </div>
  )
}

export default Cart