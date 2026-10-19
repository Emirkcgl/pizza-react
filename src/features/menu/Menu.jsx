import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";
function Menu() {
  const menu = useLoaderData();

  return (
    <section className="page-shell">
      <header className="mb-8 max-w-2xl sm:mb-10">
        <p className="eyebrow">Günün menüsü</p>
        <h1 className="display-title mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">Fırından çıkan favoriler.</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#746F68] sm:text-lg">
          Malzemeleri incele, favorini seç ve siparişini hazırlamaya başla.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
