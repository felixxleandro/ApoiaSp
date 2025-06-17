import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, label: "HOME", href: "/" },
  { id: 2, label: "INSTITUIÇÕES", href: "/institutos" },
  { id: 3, label: "SOBRE", href: "/sobre" },
  { id: 4, label: "CHATBOT", href: "/chatbot" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Logo */}
      <div className="absolute top-[80px] sm:top-[100px] md:top-[120px] left-4 sm:left-8 md:left-[129px] flex items-center z-20">
        <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11" alt="Group" src="/group-2.png" />
        <div className="ml-2 sm:ml-3 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-sm sm:text-base md:text-[17px]">
          ApoiaSp
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-[85px] sm:top-[105px] md:top-[125px] right-4 sm:right-6 z-20 md:hidden"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#fcfdeb]" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#fcfdeb]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block absolute top-[95px] md:top-[135px] left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex space-x-4 lg:space-x-8 xl:space-x-20">
          {navItems.map((item) => (
            <li key={item.id} className="h-[26px]">
              <Link
                to={item.href}
                className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-sm md:text-base lg:text-[17px] hover:text-[#c1a2a0] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-[120px] sm:top-[140px] md:top-[170px] left-0 right-0 bg-[#322030] bg-opacity-95 z-10 p-4 sm:p-6">
          <ul className="flex flex-col space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-base sm:text-lg hover:text-[#c1a2a0] transition-colors block py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;