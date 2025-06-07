import { Link } from "react-router-dom";

const navItems = [
  { id: 1, label: "HOME", href: "/" },
  { id: 2, label: "INSTITUIÇÕES", href: "/institutos" },
  { id: 3, label: "SOBRE", href: "/sobre" },
];
function Navbar() {
  return (
    <>
      <div className="absolute top-[120px] left-[129px] flex items-center z-10">
        <img className="w-11 h-11" alt="Group" src="/group-2.png" />
        <div className="ml-3 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[17px]">
          ApoiaSp
        </div>
      </div>

      <nav className="absolute top-[135px] left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex space-x-20">
          {navItems.map((item) => (
            <li key={item.id} className="h-[26px]">
              <Link
                to={item.href}
                className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[17px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
