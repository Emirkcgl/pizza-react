import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Hızlı React Pizza
      </Link>
      <Username />
      <SearchOrder />
    </header>
  );
}

export default Header;
