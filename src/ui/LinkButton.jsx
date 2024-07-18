
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function LinkButton({children, to}) {
    const navigate = useNavigate();
    const className="text-sm text-blue-500 hover:text-blue-800 hover:underline font-semibold"

    if(to === '-1')
      return  <button className={className} onClick={() => navigate(-1)}>{children}</button>

  return (
    <Link className={className} to={to}>{children}</Link>
  )
}

export default LinkButton
