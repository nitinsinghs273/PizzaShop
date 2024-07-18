import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
          {/* this is telling us that children router should show here */}
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
