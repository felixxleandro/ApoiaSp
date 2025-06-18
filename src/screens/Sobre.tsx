import Navbar from "../components/navbar";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export const Sobre = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Taina de Oliveira (Alex)",
      description: "Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG \"Escrevendo na Quebrada\" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.",
      image: "/alex.jpeg"
    },
    {
      id: 2,
      name: "Leandro Enrico Félix de Oliveira",
      description: "Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG \"Escrevendo na Quebrada\" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.",
      image: "/leandro.jpeg"
    },
    {
      id: 3,
      name: "Gabriel Luis da Costa Alonso",
      description: "Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG \"Escrevendo na Quebrada\" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.",
      image: "/gabriel.jpeg"
    },
    {
      id: 4,
      name: "Henrique Romão Tardoni",
      description: "Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG \"Escrevendo na Quebrada\" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.",
      image: "/henrique.jpeg"
    },
    {
      id: 5,
      name: "Danilton Mota Braga",
      description: "Responsável pela criação de todo o design do site, bem como organização da metodologia ágil utilizada ao longo do projeto.\n\nAtualmente (2025), trabalha na ONG \"Escrevendo na Quebrada\" e tem aprofundado seus conhecimentos em nuvem, AWS e backend.",
      image: "/danilton.jpeg"
    }
  ];

  // Technology cards data
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

  // Technology details
  const technologies = [
    {
      title: "AWS S3",
      description: "Escolhemos o Amazon S3 para hospedar nosso site porque é um serviço confiável, seguro e com alta disponibilidade. Além disso, permite que o site carregue de forma rápida e eficiente em qualquer dispositivo, seja celular, tablet ou computador. Isso garante uma experiência acessível, estável e de qualidade para todos os usuários, alinhando-se ao nosso objetivo de criar uma plataforma simples, leve e fácil de usar.",
      isRightAligned: false,
    },
    {
      title: "Python para Backend",
      description: "Escolhemos Python como linguagem de backend porque é uma tecnologia simples, versátil e muito utilizada no mercado. Ela permite desenvolver soluções rápidas, seguras e de fácil manutenção. Além disso, Python tem uma sintaxe clara, que facilita a criação de sistemas acessíveis, escaláveis e eficientes, alinhando com o objetivo do nosso projeto de oferecer um serviço funcional, leve e fácil de ser adaptado às necessidades dos usuários.",
      isRightAligned: true,
    },
    {
      title: "Javascript para Frontend",
      description: "Escolhemos JavaScript para o frontend porque é uma linguagem leve, dinâmica e compatível com todos os navegadores. Ele permite criar interfaces interativas, rápidas e responsivas, funcionando bem tanto em computadores quanto em celulares. Essa escolha está alinhada com o objetivo do nosso projeto de garantir uma experiência acessível, simples e fluida para todos os usuários, independentemente do dispositivo que utilizam.",
      isRightAligned: false,
    },
    {
      title: "AWS WAF",
      description: "Escolhemos o AWS WAF (Web Application Firewall) para a segurança do projeto porque ele protege nosso site contra ataques comuns, como tentativas de invasão, bots e acessos maliciosos. É uma solução confiável, escalável e gerenciada, que mantém a plataforma segura sem comprometer o desempenho. Isso garante que os usuários possam acessar o site de forma tranquila, segura e estável, em qualquer dispositivo.",
      isRightAligned: true,
    },
    {
      title: "AWS SageMaker",
      description: "Escolhemos o AWS SageMaker para o desenvolvimento do nosso chatbot porque ele permite criar, treinar e implementar modelos de inteligência artificial de forma eficiente, segura e escalável. Essa ferramenta oferece alta qualidade no processamento de linguagem, tornando o chatbot mais inteligente, ágil e capaz de entender diferentes formas de comunicação. Assim, garantimos uma experiência acessível, intuitiva e confiável para todos os usuários.",
      isRightAligned: false,
    },
  ];

  // Diagram components
  const diagramComponents = [
    { id: 1, title: "Frontend (Web/Mobile)" },
    { id: 2, title: "API REST (Backend)" },
    { id: 3, title: "Banco de Dados" },
    { id: 4, title: "Módulo de Chatbot" },
    { id: 5, title: "Painel de Administração" },
  ];

  // Social media icons
  const socialIcons = [
    { id: 1, icon: "/logo-tiktok.svg", alt: "Logo tiktok" },
    { id: 2, icon: "/logo-facebook.svg", alt: "Logo facebook" },
    { id: 3, icon: "/logo-linkedin.svg", alt: "Logo linkedin" },
    { id: 4, icon: "/logo-instagram.svg", alt: "Logo instagram" },
  ];

  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[804px]">
          <div className="w-full h-full bg-[url(/foto-painel.png)] bg-cover bg-center">
            <div className="h-full bg-[#322030f2]" />
          </div>

          <Navbar />

          {/* Hero Content */}
          <div className="absolute w-full px-4 top-[200px] sm:top-[250px] md:top-[300px] lg:top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="font-['Nunito',Helvetica] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] tracking-[0] leading-normal">
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] px-4">
              Se interessou pelo projeto? Conheça mais sobre ele e seus criadores!
            </p>
          </div>
        </header>

        {/* Project Overview Section */}
        <section className="w-full max-w-[1200px] mx-auto py-8 md:py-12 px-4 md:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-center md:text-right text-xl md:text-2xl lg:text-[27px] font-bold font-['Poppins',Helvetica] text-[#322030] mb-4 md:mb-6">
              Um pouco mais sobre o ApoiaSP
            </h2>

            <div className="text-center md:text-right text-sm md:text-base lg:text-[17px] font-normal font-['Poppins',Helvetica] text-[#322030]">
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

          {/* Technology Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
            {techCards.map((card) => (
              <Card key={card.id} className="rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-square rounded-[20px] sm:rounded-[30px] md:rounded-[50px]">
                    <div className="w-full h-full absolute top-0 left-0 bg-[#725b75] rounded-[20px] sm:rounded-[30px] md:rounded-[50px] opacity-70" />
                    <img
                      className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[94px] lg:h-[94px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt={card.alt}
                      src={card.icon}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Descriptions */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {techCards.map((card) => (
              <div key={card.id} className="text-center">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-[17px] font-bold font-['Poppins',Helvetica] text-[#322030] mb-1">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-[17px] font-normal font-['Poppins',Helvetica] text-[#322030]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Details Section */}
        <section className="w-full relative py-8 md:py-12">
          {/* Header section with purple background */}
          <div className="w-full bg-[#322030] py-8 md:py-10">
            <div className="container max-w-[1204px] mx-auto px-4 md:px-8">
              <h2 className="font-bold font-['Poppins',Helvetica] text-[#fcfdeb] text-xl md:text-2xl lg:text-[27px] mb-4 md:mb-6">
                Um pouco mais sobre nossas escolhas
              </h2>
              <p className="font-normal font-['Poppins',Helvetica] text-[#fcfdeb] text-sm md:text-base lg:text-[17px]">
                O objetivo principal desse projeto foi solucionar um problema real
                utilizando dois recursos principais: Utilizar recursos da AWS onde
                houvesse a possibilidade e utilizar AI (inteligência artificial)
                como principal solucionador da problemática.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="container max-w-[1204px] mx-auto px-4 md:px-8 mt-12 md:mt-16">
            {technologies.map((tech, index) => (
              <div key={tech.title}>
                <Card className="border-none shadow-none mb-12 md:mb-16">
                  <CardContent className="p-0">
                    <div
                      className={`flex flex-col ${tech.isRightAligned ? "md:items-end md:text-right" : "md:items-start md:text-left"} text-center md:text-left`}
                    >
                      <h3 className="font-bold font-['Poppins',Helvetica] text-[#322030] text-xl md:text-2xl lg:text-[27px] mb-4 md:mb-6">
                        {tech.title}
                      </h3>
                      <p className="font-normal font-['Poppins',Helvetica] text-[#322030] text-sm md:text-base lg:text-[17px]">
                        {tech.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {index < technologies.length - 1 && (
                  <Separator className="my-6 md:my-8 bg-[#322030]/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Diagram Section */}
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

            {/* Diagram */}
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

        {/* Team Section */}
        <section className="w-full max-w-[1204px] mx-auto mt-12 sm:mt-16 mb-12 sm:mb-16 px-4 sm:px-6 md:px-8">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-xl sm:text-2xl md:text-3xl lg:text-[27px] text-center lg:text-left mb-4 sm:mb-6">
            Conheça a nossa equipe
          </h2>
          <p className="font-['Poppins',Helvetica] font-normal text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px] text-center lg:text-left mb-8 sm:mb-12">
            Aqui você pode conhecer um pouco mais sobre todos que ajudaram a
            desenvolver essa ideia e entrar em contato!
          </p>

          {/* Team Members */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  {/* Profile image */}
                  <div className="w-full lg:w-[300px] h-64 md:h-80 lg:h-[300px] bg-[#3220309c] rounded-[20px] overflow-hidden mx-auto lg:mx-0">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" 
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                  </div>

                  {/* Profile information */}
                  <div className="flex-1 max-w-[853px]">
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-0">
                        <h3 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-lg sm:text-xl md:text-2xl lg:text-[27px] mb-4 md:mb-6 text-center lg:text-left">
                          {member.name}
                        </h3>

                        <p className="font-['Poppins',Helvetica] font-normal text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px] mb-6 md:mb-8 text-center lg:text-left whitespace-pre-line">
                          {member.description}
                        </p>

                        {/* Social media icons */}
                        <div className="flex gap-4 md:gap-5 justify-center lg:justify-start">
                          <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" alt="Component" src="/component-1.svg" />
                          <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" alt="Component" src="/component-2.svg" />
                          <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" alt="Component" src="/component-3.svg" />
                          <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" alt="Component" src="/component-4.svg" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-12 sm:mt-16">
          <Separator className="w-full h-px bg-[#322030]" />

          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-32 py-6 sm:py-8 gap-4 sm:gap-6">
            <div className="flex items-center">
              <img className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[42px] lg:h-[43px]" alt="Logo" src="/logo.png" />
              <div className="ml-3 font-['Poppins',Helvetica] font-bold text-[#322030] text-sm sm:text-base">
                ApoiaSp
              </div>
            </div>

            <div className="font-['Inter',Helvetica] font-medium text-[#322030] text-xs sm:text-sm md:text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </div>

            <div className="flex space-x-4 sm:space-x-6">
              {socialIcons.map((icon) => (
                <img
                  key={icon.id}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[15px] lg:h-[15px]"
                  alt={icon.alt}
                  src={icon.icon}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};