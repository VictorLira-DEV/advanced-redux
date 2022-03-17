import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

interface UI {
  ui: {
    cartIsVisible: boolean;
    notification: {
      status: string;
      title: string;
      message: string;
    };
  };
}

interface cart {
  cart: {
    items: [
      {
        id: string;
        price: number;
        quantity: number;
        totalPrice: number;
        name: string;
      }
    ];
    totalQuantity: number;
    changed: boolean;
  };
}

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state: UI) => state.ui.cartIsVisible);
  const notification = useSelector((state: UI) => state.ui.notification);
  const cart = useSelector((state: cart) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
