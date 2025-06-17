import { Card, CardContent } from "../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Team member data
  const teamMember = {
    name: "Henrique Romão Tardoni",
    description:
      'Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG "Escrevendo na Quebrada" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.',
    socialLinks: [
      { id: 1, icon: "/component-1.svg", alt: "Component" },
      { id: 2, icon: "/component-2.svg", alt: "Component" },
      { id: 3, icon: "/component-3.svg", alt: "Component" },
      { id: 4, icon: "/component-4.svg", alt: "Component" },
    ],
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto py-6 md:py-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="w-full lg:w-[300px] h-64 md:h-80 lg:h-[300px] bg-[#3220309c] rounded-[20px] overflow-hidden mx-auto lg:mx-0">
          <div className="w-full h-full bg-[url('./henrique.jpeg')] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" />
        </div>

        <Card className="flex-1 border-none shadow-none">
          <CardContent className="p-0">
            <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-xl md:text-2xl lg:text-[27px] mb-4 md:mb-6 text-center lg:text-left">
              {teamMember.name}
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-[#322030] text-sm md:text-base lg:text-[17px] whitespace-pre-line mb-6 md:mb-8 text-center lg:text-left">
              {teamMember.description}
            </p>

            <div className="flex gap-4 md:gap-5 justify-center lg:justify-start">
              {teamMember.socialLinks.map((link) => (
                <img
                  key={link.id}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  alt={link.alt}
                  src={link.icon}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};