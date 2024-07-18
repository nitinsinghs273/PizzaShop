import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return (
    <div className="hidden md:block text-sm font-semibold">{username}</div>
  );
}

export default Username;
