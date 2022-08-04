import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'm1',
          name: 'Sushi',
          price: 22.99,
          amount: 1,
        },
      ].map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <cartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.75</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
