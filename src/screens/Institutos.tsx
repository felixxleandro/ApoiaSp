import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

// Define institution data to avoid repetition
const institutions = [
  {
    id: 1,
    name: "Escrevendo na Quebrada",
    image: "/foto-institui--o-1.png",
    description:
      "Escrevendo na Quebrada é uma ONG e cursinho popular (100% gratuito) focado no desenvolvimento da escrita para vestibulares, acolhendo jovens de baixa renda e residentes da perifería que desejam ingressar no ensino superior através de vestibular. a ONG também acolhe adultos e idosos e atua no estado de  São Paulo (presencial) e em outros estados (EaD), oferecendo diversos benefícios além do ensino de qualidade.",
  },
  {
    id: 2,
    name: "Escrevendo na Quebrada",
    image: "/foto-institui--o-1.png",
    description:
      "Escrevendo na Quebrada é uma ONG e cursinho popular (100% gratuito) focado no desenvolvimento da escrita para vestibulares, acolhendo jovens de baixa renda e residentes da perifería que desejam ingressar no ensino superior através de vestibular. a ONG também acolhe adultos e idosos e atua no estado de  São Paulo (presencial) e em outros estados (EaD), oferecendo diversos benefícios além do ensino de qualidade.",
  },
];

export const Institutos = (): JSX.Element => {
  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[804px]">
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/foto-painel.png)] bg-cover bg-center">
            <div className="h-full bg-[#322030f2]" />
          </div>

          {/* Logo and Navigation */}
          <Navbar />

          {/* Hero Content */}
          <div className="absolute w-full px-4 top-[200px] sm:top-[250px] md:top-[300px] lg:top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="font-['Nunito',Helvetica] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] tracking-[0] leading-normal">
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] px-4">
              Dê uma olhada em todas as instituições cadastradas em nosso site!
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-auto lg:w-[1202px] mt-8 sm:mt-12 md:mt-16 lg:mt-[86px] mb-12 sm:mb-16 md:mb-20 lg:mb-[113px]">
          <div className="relative w-full h-12 sm:h-14 md:h-16 lg:h-20 xl:h-[113px] bg-[#322030] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <Input
              className="flex-1 bg-transparent border-none text-sm sm:text-base md:text-lg lg:text-[17px] font-['Poppins',Helvetica] font-bold text-[#fcfdeb80] placeholder:text-[#fcfdeb80] focus-visible:ring-0"
              placeholder="Busque por uma instituição específica..."
            />
            <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#fcfdeb]" />
          </div>
        </div>

        {/* Institution Cards */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-[120px] space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-[106px]">
          {institutions.map((institution) => (
            <Card
              key={institution.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-[16px]">
                <img
                  className="w-full md:w-40 lg:w-48 xl:w-[227px] h-40 sm:h-48 md:h-40 lg:h-48 xl:h-[228px] object-cover rounded-lg"
                  alt="Foto instituição"
                  src={institution.image}
                />
                <div className="flex-1">
                  <h2 className="font-['Poppins',Helvetica] font-bold text-lg sm:text-xl md:text-2xl lg:text-[27px] text-[#322030] mt-0 md:mt-[9px]">
                    {institution.name}
                  </h2>
                  <p className="font-['Poppins',Helvetica] font-normal text-sm sm:text-base md:text-lg lg:text-[17px] text-[#322030] mt-2 sm:mt-3 md:mt-[9px]">
                    {institution.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-[30px]">
                    <Button className="h-8 sm:h-9 md:h-10 lg:h-[42px] px-3 sm:px-4 md:px-6 lg:px-[22px] bg-[#322030] text-[#fcfdeb] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[50px] font-['Poppins',Helvetica] font-bold text-xs sm:text-sm md:text-base lg:text-[13px]">
                      ACESSE O SITE
                    </Button>
                    <Link to="/chatbot" className="w-full sm:w-auto">
                      <Button className="w-full h-8 sm:h-9 md:h-10 lg:h-[42px] px-3 sm:px-4 md:px-6 lg:px-[22px] bg-[#725b75] text-[#fcfdeb] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[50px] font-['Poppins',Helvetica] font-bold text-xs sm:text-sm md:text-base lg:text-[13px]">
                        PERGUNTE AO NOSSO ASSISTENTE
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 md:mt-20 lg:mt-[116px] pt-6 sm:pt-8 md:pt-9 border-t border-solid">
          <div className="px-4 sm:px-6 md:px-8 lg:px-[120px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6 sm:pb-8">
            <div className="flex items-center">
              <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-[49px]" alt="Logo" src="/logo.png" />
              <div className="ml-2 sm:ml-3 font-['Poppins',Helvetica] font-bold text-[#322030] text-sm sm:text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-xs sm:text-sm md:text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-[12px]">
              <img
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Logo tiktok"
                src="/logo-tiktok.svg"
              />
              <img
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Logo facebook"
                src="/logo-facebook.svg"
              />
              <img
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Logo linkedin"
                src="/logo-linkedin.svg"
              />
              <img
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Logo instagram"
                src="/logo-instagram.svg"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};