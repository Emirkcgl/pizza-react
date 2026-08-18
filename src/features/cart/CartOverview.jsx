import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizza</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Sepeti aç &rarr;</Link>
    </div>
  );
}

export default CartOverview;
