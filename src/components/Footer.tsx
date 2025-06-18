import { Separator } from "./ui/separator";

export const Footer = (): JSX.Element => {
  // Social media icons
  const socialIcons = [
    { id: 1, icon: "/logo-tiktok.svg", alt: "Logo tiktok" },
    { id: 2, icon: "/logo-facebook.svg", alt: "Logo facebook" },
    { id: 3, icon: "/logo-linkedin.svg", alt: "Logo linkedin" },
    { id: 4, icon: "/logo-instagram.svg", alt: "Logo instagram" },
  ];

  return (
    <footer className="mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]">
      <Separator className="w-full h-px bg-[#322030]" />

      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[120px] py-4 sm:py-6 md:py-8 lg:py-[33px] gap-4 sm:gap-6">
        <div className="flex items-center">
          <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[41px] lg:h-[41px]" alt="Logo" src="/logo.png" />
          <span className="ml-2 sm:ml-3 lg:ml-[11px] font-['Poppins',Helvetica] font-bold text-[#322030] text-sm sm:text-base">
            ApoiaSp
          </span>
        </div>

        <p className="font-['Inter',Helvetica] font-medium text-[#322030] text-xs sm:text-sm md:text-base text-center">
          © 2025 - Todos os direitos reservados a ApoiaSP.
        </p>

        <div className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-[24px]">
          {socialIcons.map((icon) => (
            <a key={icon.id} href="#" aria-label={icon.alt}>
              <img
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[15px] lg:h-[15px]"
                alt={icon.alt}
                src={icon.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};