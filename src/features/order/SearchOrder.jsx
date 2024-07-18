import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:outline-none transition-[width] duration-300 rounded-full px-4 py-2 text-sm placeholder:text-stone-400  bg-yellow-100 w-28 sm:w-64 focus:ring  focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72"
      />
    </form> 
  );
}

export default SearchOrder;
