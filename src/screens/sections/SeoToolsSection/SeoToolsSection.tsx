import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const SeoToolsSection = (): JSX.Element => {
  // Data for the technology sections
  const technologies = [
    {
      title: "AWS S3",
      description:
        "Escolhemos o Amazon S3 para hospedar nosso site porque é um serviço confiável, seguro e com alta disponibilidade. Além disso, permite que o site carregue de forma rápida e eficiente em qualquer dispositivo, seja celular, tablet ou computador. Isso garante uma experiência acessível, estável e de qualidade para todos os usuários, alinhando-se ao nosso objetivo de criar uma plataforma simples, leve e fácil de usar.",
      isRightAligned: false,
    },
    {
      title: "Python para Backend",
      description:
        "Escolhemos Python como linguagem de backend porque é uma tecnologia simples, versátil e muito utilizada no mercado. Ela permite desenvolver soluções rápidas, seguras e de fácil manutenção. Além disso, Python tem uma sintaxe clara, que facilita a criação de sistemas acessíveis, escaláveis e eficientes, alinhando com o objetivo do nosso projeto de oferecer um serviço funcional, leve e fácil de ser adaptado às necessidades dos usuários.",
      isRightAligned: true,
    },
    {
      title: "Javascript para Frontend",
      description:
        "Escolhemos JavaScript para o frontend porque é uma linguagem leve, dinâmica e compatível com todos os navegadores. Ele permite criar interfaces interativas, rápidas e responsivas, funcionando bem tanto em computadores quanto em celulares. Essa escolha está alinhada com o objetivo do nosso projeto de garantir uma experiência acessível, simples e fluida para todos os usuários, independentemente do dispositivo que utilizam.",
      isRightAligned: false,
    },
    {
      title: "AWS WAF",
      description:
        "Escolhemos o AWS WAF (Web Application Firewall) para a segurança do projeto porque ele protege nosso site contra ataques comuns, como tentativas de invasão, bots e acessos maliciosos. É uma solução confiável, escalável e gerenciada, que mantém a plataforma segura sem comprometer o desempenho. Isso garante que os usuários possam acessar o site de forma tranquila, segura e estável, em qualquer dispositivo.",
      isRightAligned: true,
    },
    {
      title: "AWS SageMaker",
      description:
        "Escolhemos o AWS SageMaker para o desenvolvimento do nosso chatbot porque ele permite criar, treinar e implementar modelos de inteligência artificial de forma eficiente, segura e escalável. Essa ferramenta oferece alta qualidade no processamento de linguagem, tornando o chatbot mais inteligente, ágil e capaz de entender diferentes formas de comunicação. Assim, garantimos uma experiência acessível, intuitiva e confiável para todos os usuários.",
      isRightAligned: false,
    },
  ];

  return (
    <section className="w-full relative py-12">
      {/* Header section with purple background */}
      <div className="w-full bg-[#322030] py-10">
        <div className="container max-w-[1204px] mx-auto px-4">
          <h2 className="font-bold font-['Poppins',Helvetica] text-[#fcfdeb] text-[27px] mb-6">
            Um pouco mais sobre nossas escolhas
          </h2>
          <p className="font-normal font-['Poppins',Helvetica] text-[#fcfdeb] text-[17px]">
            O objetivo principal desse projeto foi solucionar um problema real
            utilizando dois recursos principais: Utilizar recursos da AWS onde
            houvesse a possibilidade e utilizar AI (inteligência artificial)
            como principal solucionador da problemática.
          </p>
        </div>
      </div>

      {/* Content sections */}
      <div className="container max-w-[1204px] mx-auto px-4 mt-16">
        {technologies.map((tech, index) => (
          <React.Fragment key={tech.title}>
            <Card className="border-none shadow-none mb-16">
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${tech.isRightAligned ? "items-end text-right" : "items-start text-left"}`}
                >
                  <h3 className="font-bold font-['Poppins',Helvetica] text-[#322030] text-[27px] mb-6">
                    {tech.title}
                  </h3>
                  <p className="font-normal font-['Poppins',Helvetica] text-[#322030] text-[17px]">
                    {tech.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            {index < technologies.length - 1 && (
              <Separator className="my-8 bg-[#322030]/10" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
