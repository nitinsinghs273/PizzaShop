import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block  uppercase bg-yellow-400  font-semibold tracking-wide text-stone-800 focus:ring hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 rounded-full transition-colors duration-300 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "w-24 px-4 py-3 text-[.8em] sm:text-base  sm:px-6 sm:py-4",
    small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
    secondary:
      "inline-block  uppercase border-2 border-stone-400 font-semibold tracking-wide text-stone-400 focus:ring hover:bg-stone-300 focus:bg-stone-300 focus:outline-none hover:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 rounded-full transition-colors duration-300  disabled:cursor-not-allowed px-4 py-2.5 text-[.8em] sm:text-base  sm:px-5 sm:py-3.5 focus:text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
