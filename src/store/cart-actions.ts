import { uiAction } from './ui-slice';
import Axios from 'axios';
import { cartActions } from './cart-slice'

export const fetchCartData = function () {
  return async (dispatch: any) => {
    const fetchData = async function () {
      const response = await Axios(
        'https://advanced-redux-8a1de-default-rtdb.firebaseio.com/cart.json'
      );

      if (response.status !== 200) {
        throw new Error('Could not fetch cart data');
      }
      const data = await response.data;
      return data;
    };

    try {
        const cartData = await fetchData(); 
         dispatch(cartActions.replaceCart({
           items: cartData.items || [],
           totalQuantity: cartData.totalQuantity
         }))
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching the cart Failed',
        })
      );
    }
  };
};

export const sendCartData = function (cart: any) {
  return async (dispatch: any) => {
    dispatch(
      uiAction.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async function () {
      const response = await Axios({
        url: 'https://advanced-redux-8a1de-default-rtdb.firebaseio.com/cart.json',
        method: 'PUT',
        data: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        }),
      });

      if (response.status !== 200) {
        throw new Error('Sending the cart failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending the cart Failed',
        })
      );
    }
  };
};
