import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Menüye dön</Link>

      <p>Sepetin hâlâ boş. Birkaç pizza ekleyerek başla :)</p>
    </div>
  );
}

export default EmptyCart;
