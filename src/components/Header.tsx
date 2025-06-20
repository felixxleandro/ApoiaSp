import Navbar from "./navbar";

interface HeaderProps {
  title: string;
  subtitle: string;
  titleColor?: "default" | "mixed";
}

export const Header = ({
  title,
  subtitle,
  titleColor = "default",
}: HeaderProps): JSX.Element => {
  return (
    <header className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[804px] bg-[#322030] overflow-hidden">
      {/* Navbar visível sobre fundo escuro */}
      <Navbar />

      {/* Hero Content */}
      <div className="w-full px-4 absolute top-[200px] sm:top-[250px] md:top-[300px] lg:top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="font-['Nunito',Helvetica] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] tracking-[0] leading-normal text-[#fcfdeb]">
          {titleColor === "mixed" ? (
            <>
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </>
          ) : (
            <span>{title}</span>
          )}
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] px-4">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
