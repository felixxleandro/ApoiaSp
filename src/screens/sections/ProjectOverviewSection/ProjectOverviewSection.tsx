import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const ProjectOverviewSection = (): JSX.Element => {
  // Data for technology cards
  const techCards = [
    {
      id: 1,
      title: "AWS S3",
      description: "Hospedagem do site através do AWS S3",
      icon: "/s3-cloud-svg.svg",
      alt: "Cloud svg",
    },
    {
      id: 2,
      title: "Python",
      description: "Linguagem escolhida para back-end.",
      icon: "/python-svg.svg",
      alt: "Python svg",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Linguagem escolhida para front-end.",
      icon: "/javascript-svg.svg",
      alt: "Javascript svg",
    },
    {
      id: 4,
      title: "AWS WAF",
      description: "Método de segurança inicial.",
      icon: "/waf-svg.svg",
      alt: "Waf svg",
    },
    {
      id: 5,
      title: "AWS SageMaker",
      description: "AI para respostas automatizadas.",
      icon: "/sagemaker-svg.svg",
      alt: "Sagemaker svg",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12">
      <div className="mb-16">
        <h2 className="text-right text-[27px] font-bold font-['Poppins',Helvetica] text-[#322030] mb-6">
          Um pouco mais sobre o ApoiaSP
        </h2>

        <div className="text-right text-[17px] font-normal font-['Poppins',Helvetica] text-[#322030]">
          <p className="mb-4">
            O ApoiaSP é um projeto de conclusão de curso da Escola da Nuvem,
            criado para solucionar o desafio de acesso a serviços públicos por
            pessoas em situação de vulnerabilidade de São Paulo utilizando
            serviços da AWS. Nossa plataforma buscou pela acessibilidade fácil e
            rápida aos usuários, de forma que fosse fácil de usar para idosos ou
            pessoas em diferentes níveis de analfabetismo.
          </p>
          <p className="mb-4">
            A ideia nasceu da constatação de que, geralmente, é muito difícil
            encontrar informações claras em sites governamentais e localizar
            ONGs que ofereçam apoio.
          </p>
          <p className="font-bold">O projeto foi feito utilizando:</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-12">
        {techCards.map((card) => (
          <Card key={card.id} className="rounded-[50px] bg-transparent">
            <CardContent className="p-0">
              <div className="relative h-56 rounded-[50px]">
                <div className="w-full h-full absolute top-0 left-0 bg-[#725b75] rounded-[50px] opacity-70" />
                <img
                  className="absolute w-[94px] h-[94px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt={card.alt}
                  src={card.icon}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {techCards.map((card) => (
          <div key={card.id} className="text-center">
            <h3 className="text-[17px] font-bold font-['Poppins',Helvetica] text-[#322030] mb-1">
              {card.title}
            </h3>
            <p className="text-[17px] font-normal font-['Poppins',Helvetica] text-[#322030]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
