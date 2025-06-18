import Navbar from "./navbar";

interface HeaderProps {
  title: string;
  subtitle: string;
  titleColor?: "default" | "mixed";
}

export const Header = ({ title, subtitle, titleColor = "default" }: HeaderProps): JSX.Element => {
  return (
    <header className="relative w-full h-screen">
      {/* Background que ocupa toda a tela */}
      <div className="absolute w-full h-full top-0 left-0 bg-[url(/foto-painel.png)] bg-cover bg-center">
        <div className="h-full bg-[#322030f2]" />
      </div>
      
      <Navbar />
      
      {/* Hero Content */}
      <div className="absolute w-full px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="font-['Nunito',Helvetica] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] tracking-[0] leading-normal">
          {titleColor === "mixed" ? (
            <>
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </>
          ) : (
            <span className="text-[#fcfdeb]">{title}</span>
          )}
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] px-4">
          {subtitle}
        </p>
      </div>
    </header>
  );
};