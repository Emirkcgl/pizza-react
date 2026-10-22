import { useSelector } from "react-redux";
export default function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;
  return (
    <div className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-full border border-[#ECE3D7] bg-white px-3 py-2 text-sm font-semibold text-[#37342F] shadow-sm">
      <span
        className="grid h-6 w-6 place-items-center rounded-full bg-[#2F593C] text-[0.65rem] font-bold text-white"
        aria-hidden="true"
      >
        {userName.charAt(0).toUpperCase()}
      </span>
      <span>{userName}</span>
    </div>
  );
}
