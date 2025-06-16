import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { id: 1, label: "HOME", href: "/" },
  { id: 2, label: "INSTITUIÇÕES", href: "/institutos" },
  { id: 3, label: "SOBRE", href: "/sobre" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent z-20 relative">
      {/* Logo e nome */}
      <div className="flex items-center px-4 py-3 sm:px-8">
        <img className="w-11 h-11" alt="Group" src="/group-2.png" />
        <div className="ml-3 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[17px]">
          ApoiaSp
        </div>
        {/* Botão menu mobile */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg
            className="w-7 h-7 text-[#fcfdeb]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Menu desktop */}
      <ul className="hidden md:flex justify-center space-x-10 mt-2">
        {navItems.map((item) => (
          <li key={item.id} className="h-[26px]">
            <Link
              to={item.href}
              className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[17px] hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Menu mobile */}
      {open && (
        <ul className="flex flex-col items-center gap-4 mt-2 md:hidden bg-[#222] bg-opacity-90 py-4 rounded-b-xl">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[17px] hover:underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
