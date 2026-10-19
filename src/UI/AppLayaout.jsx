import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayaout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="min-h-0 overflow-x-hidden overflow-y-auto">
        <main>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayaout;
