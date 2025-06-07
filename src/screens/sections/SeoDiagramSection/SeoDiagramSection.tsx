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
    <section className="w-full py-16 bg-[#725b75] relative">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Heading and description */}
        <div className="mb-16">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[27px] mb-6">
            Diagrama ApoiaSP
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#fcfdeb] text-[17px]">
            Confira abaixo o diagrama do projeto ApoiaSP. Ele mostra de forma
            simples como os sistemas, serviços e ferramentas estão conectados
            para fazer a nossa plataforma funcionar. Assim, você entende como as
            informações são organizadas e como cada parte trabalha junta para
            oferecer um serviço rápido, seguro e acessível.
          </p>
        </div>

        {/* Diagram */}
        <Card className="border border-solid border-[#fcfdeb] bg-transparent p-7 relative h-[543px]">
          <CardContent className="p-0 relative h-full">
            {/* Left side components */}
            <div className="flex flex-col gap-12">
              {diagramComponents.map((component, index) => (
                <div key={component.id} className="w-[501px] h-[57px] relative">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 px-6 py-[42px] rounded-[50px] border border-solid border-[#fcfdeb]">
                    <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#fcfdeb] text-xs tracking-[0] leading-[normal]">
                      {component.title}
                    </div>
                  </div>

                  {/* Arrows for all components except the last one */}
                  {index < diagramComponents.length - 1 && (
                    <>
                      <img
                        className="absolute w-[15px] h-[46px] top-[57px] left-[221px]"
                        alt="Arrow down"
                        src="/arrow-1.svg"
                      />
                      <img
                        className="absolute w-[15px] h-[46px] top-[58px] left-[270px]"
                        alt="Arrow down"
                        src="/arrow-4.svg"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Right side component */}
            <div className="absolute top-[243px] left-[636px] w-[531px] h-[57px]">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 px-6 py-[42px] rounded-[50px] border border-solid border-[#fcfdeb]">
                <div className="relative w-[150px] h-[15px]">
                  <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#fcfdeb] text-xs tracking-[0] leading-[normal]">
                    API de Serviços Externos
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal arrows connecting to external API */}
            <img
              className="absolute w-[111px] h-[15px] top-[255px] left-[530px]"
              alt="Arrow right"
              src="/arrow-9.svg"
            />
            <img
              className="absolute w-[140px] h-[15px] top-[286px] left-[511px]"
              alt="Arrow left"
              src="/arrow-10.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
