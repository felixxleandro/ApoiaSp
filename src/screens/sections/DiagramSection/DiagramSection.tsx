import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const DiagramSection = (): JSX.Element => {
  // Team member data
  const teamMember = {
    name: "Danilton Mota Braga",
    description:
      'Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG "Escrevendo na Quebrada" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.',
    socialIcons: [
      { src: "/component-1.svg", alt: "Component" },
      { src: "/component-2.svg", alt: "Component" },
      { src: "/component-3.svg", alt: "Component" },
      { src: "/component-4.svg", alt: "Component" },
    ],
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto py-6 md:py-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Profile image card */}
        <Card className="w-full lg:w-[300px] h-64 md:h-80 lg:h-[300px] bg-[#3220309c] rounded-[20px] shrink-0 mx-auto lg:mx-0">
          <CardContent className="p-0 h-full"></CardContent>
        </Card>

        {/* Profile information */}
        <div className="flex flex-col flex-1">
          <h2 className="font-bold text-xl md:text-2xl lg:text-[27px] text-[#322030] font-['Poppins',Helvetica] mb-4 md:mb-6 text-center lg:text-left">
            {teamMember.name}
          </h2>

          <p className="text-sm md:text-base lg:text-[17px] text-[#322030] font-['Poppins',Helvetica] font-normal whitespace-pre-line mb-6 md:mb-8 text-center lg:text-left">
            {teamMember.description}
          </p>

          {/* Social icons */}
          <div className="flex gap-4 md:gap-5 justify-center lg:justify-start">
            {teamMember.socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};