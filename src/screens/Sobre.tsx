import Navbar from "../components/navbar";
import { Separator } from "../components/ui/separator";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { DiagramSection } from "./sections/DiagramSection";
import { FeatureListSection } from "./sections/FeatureListSection";
import { FeatureWrapperSection } from "./sections/FeatureWrapperSection/FeatureWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";
import { SeoDiagramSection } from "./sections/SeoDiagramSection";
import { SeoToolsSection } from "./sections/SeoToolsSection";
import { TitleSection } from "./sections/TitleSection/TitleSection";

export const Sobre = (): JSX.Element => {
  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        <header className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[804px]">
          <div className="w-full h-full bg-[url(/foto-painel.png)] bg-cover bg-center">
            <div className="h-full bg-[#322030f2]" />
          </div>

          <Navbar />

          <TitleSection />
        </header>

        <ProjectOverviewSection />
        <SeoToolsSection />
        <SeoDiagramSection />

        <section className="w-full max-w-[1204px] mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8 px-4 sm:px-6 md:px-8">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-lg sm:text-xl md:text-2xl lg:text-[27px] text-center lg:text-left">
            Conheça a nossa equipe
          </h2>
          <p className="font-['Poppins',Helvetica] font-normal text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px] mt-3 sm:mt-4 text-center lg:text-left">
            Aqui você pode conhecer um pouco mais sobre todos que ajudaram a
            desenvolver essa ideia e entrar em contato!
          </p>
        </section>

        <FeatureListSection />
        <FeatureWrapperSection />
        <ContentWrapperSection />
        <MainContentSection />
        <DiagramSection />

        <footer className="w-full mt-6 sm:mt-8">
          <Separator className="w-full h-px" />

          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-32 py-4 sm:py-6 md:py-8 gap-4 sm:gap-6">
            <div className="flex items-center">
              <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[42px] lg:h-[43px]" alt="Logo" src="/logo.png" />
              <div className="ml-2 font-['Poppins',Helvetica] font-bold text-[#322030] text-sm sm:text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-xs sm:text-sm md:text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <img
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[15px] lg:h-[15px]"
                alt="Logo tiktok"
                src="/logo-tiktok.svg"
              />
              <img
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[15px] lg:h-[15px]"
                alt="Logo facebook"
                src="/logo-facebook.svg"
              />
              <img
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[15px] lg:h-[15px]"
                alt="Logo linkedin"
                src="/logo-linkedin.svg"
              />
              <img
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[15px] lg:h-[15px]"
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