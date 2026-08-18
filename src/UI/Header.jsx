import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
function Header() {
  return (
    <header>
      <Link to="/">Hızlı React Pizza</Link>
      <p>Emir</p>
      <SearchOrder />
    </header>
  );
}

export default Header;
