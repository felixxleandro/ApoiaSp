import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { id: 1, alt: "Social Media Link 1", src: "/component-1.svg" },
    { id: 2, alt: "Social Media Link 2", src: "/component-2.svg" },
    { id: 3, alt: "Social Media Link 3", src: "/component-3.svg" },
    { id: 4, alt: "Social Media Link 4", src: "/component-4.svg" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto py-6 md:py-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Profile image placeholder */}
        <div className="w-full lg:w-[300px] h-64 md:h-80 lg:h-[300px] bg-[#3220309c] rounded-[20px] overflow-hidden mx-auto lg:mx-0">
          <div className="w-full h-full bg-[url('./gabriel.jpeg')] bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" />
        </div>

        {/* Profile content */}
        <div className="flex-1 max-w-[853px]">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <h2 className="font-bold text-xl md:text-2xl lg:text-[27px] text-[#322030] font-['Poppins',Helvetica] mb-4 md:mb-6 text-center lg:text-left">
                Gabriel Luis da Costa Alonso
              </h2>

              <p className="font-normal text-sm md:text-base lg:text-[17px] text-[#322030] font-['Poppins',Helvetica] mb-6 md:mb-8 text-center lg:text-left">
                Responsável pela criação de todo o design do site, bem como
                organização da metodologia ágil utilizada ao longo do projeto.
                <br />
                <br />
                Atualmente (2025), trabalha na ONG "Escrevendo na
                Quebrada" e tem aprofundado seus conhecimentos em nuvem,
                AWS e backend.
              </p>

              {/* Social media icons */}
              <div className="flex gap-4 md:gap-5 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <img
                    key={link.id}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    alt={link.alt}
                    src={link.src}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};