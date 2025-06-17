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
        <header className="relative w-full h-[600px] md:h-[804px]">
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/foto-painel.png)] bg-cover bg-center">
            <div className="h-full bg-[#322030f2]" />
          </div>

          {/* Logo and Navigation */}
          <Navbar />

          {/* Hero Content */}
          <div className="absolute w-full px-4 top-[250px] md:top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="font-['Nunito',Helvetica] font-black text-4xl md:text-6xl lg:text-[86px] tracking-[0] leading-normal">
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </h1>
            <p className="mt-4 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-lg md:text-xl lg:text-[25px] px-4">
              Dê uma olhada em todas as instituições cadastradas em nosso site!
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mx-4 md:mx-8 lg:mx-auto lg:w-[1202px] mt-12 md:mt-[86px] mb-16 md:mb-[113px]">
          <div className="relative w-full h-16 md:h-20 lg:h-[113px] bg-[#322030] rounded-[25px] md:rounded-[50px] flex items-center px-4 md:px-8 lg:px-12">
            <Input
              className="flex-1 bg-transparent border-none text-sm md:text-base lg:text-[17px] font-['Poppins',Helvetica] font-bold text-[#fcfdeb80] placeholder:text-[#fcfdeb80] focus-visible:ring-0"
              placeholder="Busque por uma instituição específica..."
            />
            <Search className="w-6 h-6 md:w-8 md:h-8 text-[#fcfdeb]" />
          </div>
        </div>

        {/* Institution Cards */}
        <div className="px-4 md:px-8 lg:px-[120px] space-y-12 md:space-y-16 lg:space-y-[106px]">
          {institutions.map((institution) => (
            <Card
              key={institution.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:gap-[16px]">
                <img
                  className="w-full md:w-48 lg:w-[227px] h-48 md:h-48 lg:h-[228px] object-cover rounded-lg"
                  alt="Foto instituição"
                  src={institution.image}
                />
                <div className="flex-1">
                  <h2 className="font-['Poppins',Helvetica] font-bold text-xl md:text-2xl lg:text-[27px] text-[#322030] mt-2 md:mt-[9px]">
                    {institution.name}
                  </h2>
                  <p className="font-['Poppins',Helvetica] font-normal text-sm md:text-base lg:text-[17px] text-[#322030] mt-2 md:mt-[9px]">
                    {institution.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-[30px]">
                    <Button className="h-10 md:h-[42px] px-4 md:px-[22px] bg-[#322030] text-[#fcfdeb] rounded-[25px] md:rounded-[50px] font-['Poppins',Helvetica] font-bold text-xs md:text-[13px]">
                      ACESSE O SITE
                    </Button>
                    <Link to="/chatbot" className="w-full sm:w-auto">
                      <Button className="w-full h-10 md:h-[42px] px-4 md:px-[22px] bg-[#725b75] text-[#fcfdeb] rounded-[25px] md:rounded-[50px] font-['Poppins',Helvetica] font-bold text-xs md:text-[13px]">
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
        <footer className="mt-16 md:mt-[116px] pt-6 md:pt-9 border-t border-solid">
          <div className="px-4 md:px-8 lg:px-[120px] flex flex-col md:flex-row justify-between items-center gap-4 pb-6">
            <div className="flex items-center">
              <img className="w-10 h-10 md:w-12 md:h-[49px]" alt="Logo" src="/logo.png" />
              <div className="ml-2 md:ml-3 font-['Poppins',Helvetica] font-bold text-[#322030] text-sm md:text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-xs md:text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex gap-3 md:gap-[12px]">
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Logo tiktok"
                src="/logo-tiktok.svg"
              />
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Logo facebook"
                src="/logo-facebook.svg"
              />
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                alt="Logo linkedin"
                src="/logo-linkedin.svg"
              />
              <img
                className="w-4 h-4 md:w-5 md:h-5"
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