import { Card, CardContent } from "../../../components/ui/card";

export const SeoDiagramSection = (): JSX.Element => {
  // Data for diagram components
  const diagramComponents = [
    { id: 1, title: "Frontend (Web/Mobile)" },
    { id: 2, title: "API REST (Backend)" },
    { id: 3, title: "Banco de Dados" },
    { id: 4, title: "Módulo de Chatbot" },
    { id: 5, title: "Painel de Administração" },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#725b75] relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Heading and description */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-xl md:text-2xl lg:text-[27px] mb-4 md:mb-6">
            Diagrama ApoiaSP
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#fcfdeb] text-sm md:text-base lg:text-[17px]">
            Confira abaixo o diagrama do projeto ApoiaSP. Ele mostra de forma
            simples como os sistemas, serviços e ferramentas estão conectados
            para fazer a nossa plataforma funcionar. Assim, você entende como as
            informações são organizadas e como cada parte trabalha junta para
            oferecer um serviço rápido, seguro e acessível.
          </p>
        </div>

        {/* Diagram - Simplified for mobile */}
        <Card className="border border-solid border-[#fcfdeb] bg-transparent p-4 md:p-7 relative">
          <CardContent className="p-0 relative">
            {/* Mobile Layout - Vertical Stack */}
            <div className="block md:hidden space-y-6">
              {diagramComponents.map((component, index) => (
                <div key={component.id}>
                  <div className="w-full h-14 flex items-center justify-center px-4 py-3 rounded-[25px] border border-solid border-[#fcfdeb]">
                    <div className="font-['Inter',Helvetica] font-bold text-[#fcfdeb] text-xs text-center">
                      {component.title}
                    </div>
                  </div>
                  {index < diagramComponents.length - 1 && (
                    <div className="flex justify-center my-2">
                      <div className="w-px h-6 bg-[#fcfdeb]"></div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* External API for mobile */}
              <div className="w-full h-14 flex items-center justify-center px-4 py-3 rounded-[25px] border border-solid border-[#fcfdeb] bg-[#fcfdeb]/10">
                <div className="font-['Inter',Helvetica] font-bold text-[#fcfdeb] text-xs text-center">
                  API de Serviços Externos
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original Complex Layout */}
            <div className="hidden md:block relative h-[400px] lg:h-[543px]">
              {/* Left side components */}
              <div className="flex flex-col gap-8 lg:gap-12">
                {diagramComponents.map((component, index) => (
                  <div key={component.id} className="w-full max-w-[400px] lg:w-[501px] h-12 lg:h-[57px] relative">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-[42px] rounded-[25px] lg:rounded-[50px] border border-solid border-[#fcfdeb]">
                      <div className="relative w-fit font-['Inter',Helvetica] font-bold text-[#fcfdeb] text-xs tracking-[0] leading-[normal]">
                        {component.title}
                      </div>
                    </div>

                    {/* Arrows for desktop only */}
                    {index < diagramComponents.length - 1 && (
                      <>
                        <img
                          className="absolute w-[15px] h-[46px] top-[57px] left-[45%] hidden lg:block"
                          alt="Arrow down"
                          src="/arrow-1.svg"
                        />
                        <img
                          className="absolute w-[15px] h-[46px] top-[58px] left-[55%] hidden lg:block"
                          alt="Arrow down"
                          src="/arrow-4.svg"
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Right side component - Desktop only */}
              <div className="absolute top-[180px] lg:top-[243px] right-0 w-full max-w-[400px] lg:w-[531px] h-12 lg:h-[57px]">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-[42px] rounded-[25px] lg:rounded-[50px] border border-solid border-[#fcfdeb]">
                  <div className="relative w-fit font-['Inter',Helvetica] font-bold text-[#fcfdeb] text-xs tracking-[0] leading-[normal]">
                    API de Serviços Externos
                  </div>
                </div>
              </div>

              {/* Horizontal arrows connecting to external API - Desktop only */}
              <img
                className="absolute w-[80px] lg:w-[111px] h-[15px] top-[192px] lg:top-[255px] left-[400px] lg:left-[530px] hidden lg:block"
                alt="Arrow right"
                src="/arrow-9.svg"
              />
              <img
                className="absolute w-[100px] lg:w-[140px] h-[15px] top-[210px] lg:top-[286px] left-[380px] lg:left-[511px] hidden lg:block"
                alt="Arrow left"
                src="/arrow-10.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};