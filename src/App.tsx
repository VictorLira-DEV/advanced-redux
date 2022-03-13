import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const toggleItem = useSelector((state: any) => state.displayItem);

  return (
    <Layout>
      {toggleItem && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
