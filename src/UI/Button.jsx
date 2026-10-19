import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", className = "", ...props }) {
  const base =
    "inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-full text-center text-sm font-bold tracking-[-0.01em] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#A83422]/20 focus:ring-offset-2 focus:ring-offset-[#FAF7F2] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

  const styles = {
    primary:
      base +
      " bg-[#A83422] px-6 py-3 text-white shadow-[0_10px_25px_rgba(168,52,34,0.2)] hover:-translate-y-0.5 hover:bg-[#812719] hover:shadow-[0_14px_30px_rgba(168,52,34,0.26)] active:translate-y-0",
    small:
      base +
      " min-h-[2.5rem] bg-[#A83422] px-4 py-2 text-xs uppercase tracking-[0.08em] text-white shadow-sm hover:bg-[#812719]",
    secondary:
      base +
      " border border-[#D9CFC2] bg-white px-6 py-3 text-[#37342F] shadow-sm hover:-translate-y-0.5 hover:border-[#A83422] hover:text-[#A83422]",
  };

  const classes = `${styles[type] || styles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
