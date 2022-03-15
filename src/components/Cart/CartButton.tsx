import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const CartButton = (props: any) => {
  const dispatch = useDispatch();
  const toggleCart = function () {
    dispatch(uiAction.toggle());
  };

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
