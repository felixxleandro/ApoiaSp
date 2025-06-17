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
    image: "./public/foto-institui--o-1.png",
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
        <header className="relative w-full h-[804px]">
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/foto-painel.png)] bg-cover bg-[50%_50%]">
            <div className="h-full bg-[#322030f2]" />
          </div>

          {/* Logo and Navigation */}
          <Navbar />

          {/* Hero Content */}
          <div className="absolute w-[1204px] h-[162px] top-[358px] left-[120px] text-center">
            <h1 className="font-['Nunito',Helvetica] font-black text-[86px] tracking-[0] leading-normal whitespace-nowrap">
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </h1>
            <p className="mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[25px]">
              Dê uma olhada em todas as instituições cadastradas em nosso site!
            </p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mx-auto w-[1202px] mt-[86px] mb-[113px] px-[120px]">
          <div className="relative w-full h-[113px] bg-[#322030] rounded-[50px] flex items-center px-12">
            <Input
              className="flex-1 bg-transparent border-none text-[17px] font-['Poppins',Helvetica] font-bold text-[#fcfdeb80] placeholder:text-[#fcfdeb80] focus-visible:ring-0"
              placeholder="Busque por uma instituição específica..."
            />
            <Search className="w-8 h-8 text-[#fcfdeb]" />
          </div>
        </div>

        {/* Institution Cards */}
        <div className="px-[120px] space-y-[106px]">
          {institutions.map((institution) => (
            <Card
              key={institution.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 flex">
                <img
                  className="w-[227px] h-[228px] object-cover"
                  alt="Foto instituição"
                  src={institution.image}
                />
                <div className="ml-[16px] flex-1">
                  <h2 className="font-['Poppins',Helvetica] font-bold text-[27px] text-[#322030] mt-[9px]">
                    {institution.name}
                  </h2>
                  <p className="font-['Poppins',Helvetica] font-normal text-[17px] text-[#322030] mt-[9px] max-w-[956px]">
                    {institution.description}
                  </p>
                  <div className="flex gap-3 mt-[30px]">
                    <Button className="h-[42px] px-[22px] bg-[#322030] text-[#fcfdeb] rounded-[50px] font-['Poppins',Helvetica] font-bold text-[13px]">
                      ACESSE O SITE
                    </Button>
                    <Link to="/chatbot">
                      <Button className="h-[42px] px-[22px] bg-[#725b75] text-[#fcfdeb] rounded-[50px] font-['Poppins',Helvetica] font-bold text-[13px]">
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
        <footer className="mt-[116px] pt-9 border-t border-solid">
          <div className="px-[120px] flex justify-between items-center">
            <div className="flex items-center">
              <img className="w-12 h-[49px]" alt="Logo" src="/logo.png" />
              <div className="ml-3 font-['Poppins',Helvetica] font-bold text-[#322030] text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex gap-[12px]">
              <img
                className="w-5 h-5"
                alt="Logo tiktok"
                src="/logo-tiktok.svg"
              />
              <img
                className="w-5 h-5"
                alt="Logo facebook"
                src="/logo-facebook.svg"
              />
              <img
                className="w-5 h-5"
                alt="Logo linkedin"
                src="/logo-linkedin.svg"
              />
              <img
                className="w-5 h-5"
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