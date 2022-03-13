import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { displayItemActions } from "../../store/displayItem";

const MainHeader = (props: any) => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={() => dispatch(displayItemActions.toggle())} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
