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
        <header className="relative w-full h-[804px]">
          <div className="w-full h-full bg-[url(/foto-painel.png)] bg-cover bg-[50%_50%]">
            <div className="h-full bg-[#322030f2]" />
          </div>

          <Navbar />

          <TitleSection />
        </header>

        <ProjectOverviewSection />
        <SeoToolsSection />
        <SeoDiagramSection />

        <section className="w-[1204px] mx-auto mt-8 mb-8 px-4">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-[27px]">
            Conheça a nossa equipe
          </h2>
          <p className="font-['Poppins',Helvetica] font-normal text-[#322030] text-[17px] mt-4">
            Aqui você pode conhecer um pouco mais sobre todos que ajudaram a
            desenvolver essa ideia e entrar em contato!
          </p>
        </section>

        <FeatureListSection />
        <FeatureWrapperSection />
        <ContentWrapperSection />
        <MainContentSection />
        <DiagramSection />

        <footer className="w-full mt-8">
          <Separator className="w-full h-px" />

          <div className="flex items-center justify-between px-32 py-8">
            <div className="flex items-center">
              <img className="w-[42px] h-[43px]" alt="Logo" src="/logo.png" />
              <div className="ml-2 font-['Poppins',Helvetica] font-bold text-[#322030] text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex space-x-4">
              <img
                className="w-[15px] h-[15px]"
                alt="Logo tiktok"
                src="/logo-tiktok.svg"
              />
              <img
                className="w-[15px] h-[15px]"
                alt="Logo facebook"
                src="/logo-facebook.svg"
              />
              <img
                className="w-[15px] h-[15px]"
                alt="Logo linkedin"
                src="/logo-linkedin.svg"
              />
              <img
                className="w-[15px] h-[15px]"
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
