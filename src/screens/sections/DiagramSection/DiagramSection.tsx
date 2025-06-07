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
    <section className="w-full max-w-[1200px] mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile image card */}
        <Card className="w-full md:w-[300px] h-[300px] bg-[#3220309c] rounded-[20px] shrink-0">
          <CardContent className="p-0 h-full"></CardContent>
        </Card>

        {/* Profile information */}
        <div className="flex flex-col">
          <h2 className="font-bold text-[27px] text-[#322030] font-['Poppins',Helvetica] mb-6">
            {teamMember.name}
          </h2>

          <p className="text-[17px] text-[#322030] font-['Poppins',Helvetica] font-normal whitespace-pre-line mb-6">
            {teamMember.description}
          </p>

          {/* Social icons */}
          <div className="flex gap-5 mt-auto">
            {teamMember.socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-20 h-20"
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
