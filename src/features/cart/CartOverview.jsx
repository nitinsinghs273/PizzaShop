import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TotalPrice, TotalQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(TotalQuantity);
  const totalPrice = useSelector(TotalPrice);
  if (totalQuantity === 0) return;
  return (
    <div className=" bg-black px-4 py-4 uppercase  text-white sm:px-6 flex items-center justify-between">
      <p className="space-x-5 ">
        <span className="font-semibold text-stone-300 ">
          {totalQuantity} pizzas
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
