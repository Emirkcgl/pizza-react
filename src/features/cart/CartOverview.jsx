import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 py-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizza</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Sepeti aç &rarr;</Link>
    </div>
  );
}

export default CartOverview;
