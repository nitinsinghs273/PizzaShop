import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/Username";

function Header() {
  return (
    <header className="flex place-items-center justify-between text-sm border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase sm:px-6  sm:text-base md:text-lg">
      <Link to="/" className="tracking-widest">
        PizzaShop Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
