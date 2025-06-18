import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Define institution data to avoid repetition
const institutions = [
  {
    id: 1,
    name: "Escola da Nuvem",
    image: "/escola_da_nuvem_logo.jpeg",
    description:
      "A Escola da Nuvem, fundada em 2020 por empresários e profissionais de tecnologia, é uma organização sem fins lucrativos que oferece cursos online gratuitos na área de tecnologia em nuvem, com o objetivo de construir uma formação técnica de qualidade, de olho na empregabilidade. A iniciativa proporciona oportunidades reais de emprego. Centrada na solidariedade e na dignidade.",
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
        <Header 
          title="APOIASP"
          subtitle="Dê uma olhada em todas as instituições cadastradas em nosso site!"
          titleColor="mixed"
        />

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
                    <a href={institution.id === 1 ? "https://escoladanuvem.org/" : "#"} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button className="w-full h-8 sm:h-9 md:h-10 lg:h-[42px] px-3 sm:px-4 md:px-6 lg:px-[22px] bg-[#322030] text-[#fcfdeb] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[50px] font-['Poppins',Helvetica] font-bold text-xs sm:text-sm md:text-base lg:text-[13px]">
                        ACESSE O SITE
                      </Button>
                    </a>
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
        <Footer />
      </div>
    </div>
  );
};