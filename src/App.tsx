import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { uiAction } from './store/ui-slice';
import Notification from './components/UI/Notification';
import Axios from 'axios';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state: any) => state.ui.cartIsVisible);
  const notification = useSelector((state: any) => state.ui.notification);
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    console.log(notification);
    const sendCartData = async function () {
      try {
        dispatch(
          uiAction.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data',
          })
        );

        const response = await Axios({
          url: 'https://advanced-redux-8a1de-default-rtdb.firebaseio.com/cart.json',
          method: 'PUT',
          data: JSON.stringify(cart),
        });

        if (response.status !== 200) {
          throw new Error('Sending the cart failed!');
        }

        dispatch(
          uiAction.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully',
          })
        );
      } catch (err) {
        dispatch(
          uiAction.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending the cart Failed',
          })
        );
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData();
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
