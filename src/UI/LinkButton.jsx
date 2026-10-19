import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "inline-flex min-h-[2.5rem] items-center gap-2 rounded-lg px-1 text-sm font-semibold text-[#746F68] transition-colors hover:text-[#A83422] focus:outline-none focus:ring-4 focus:ring-[#A83422]/10";

  if (to === -1) {
    return (
      <button type="button" onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
