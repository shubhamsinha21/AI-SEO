// alternative option ----
// import { ReactNode } from "react";
// interface ButtonProps {
//   children: ReactNode;
// }

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <button
      className="relative py-2 px-3 rounded-lg font-medium text-sm
  bg-gradient-to-b from-[#190d2e] to-[#4a208a] 
  shadow-[0px_0px_12px_#8c45ff] hover:py-[9px] hover:duration-300 transition"
    >
      <div className="absolute inset-0 ">
        <div
          className=" rounded-lg border border-white/20 absolute inset-0
      [mask-image:linear-gradient(to_bottom, black, transparent)]"
        ></div>
        <div
          className="border absolute rounded-lg inset-0 border-white/40
      [mask-image:linear-gradient(to_top, black, transparent)]"
        ></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140, 69, 225, 0.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
}
