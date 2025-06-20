import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      description: "Responsável pelo desenvolvimento de fron-end e back-end, bem como ferramentas de IA utilizadas ao longo do projeto e formas de tornar o protótipo mais funcional.\n\nAtualmente (2025), bacharelando em \"Engenharia da Computação\" e tem aprofundado seus conhecimentos em nuvem, AWS e devops.",
      image: "/leandro.jpeg"
    },
    {
      id: 3,
      name: "Gabriel Luis da Costa Alonso",
      description: "Responsável por desenhar a arquitetura serverless do projeto na nuvem AWS, garantindo a integração segura e escalável entre todos os serviços.\n\nAtualmente (2025), cursando \"Ciência da Computação\" e tem aprofundado seus conhecimentos em design de sistemas e programação através da criação de soluções na nuvem.",
      image: "/gabriel.jpeg"
    },
    {
      id: 4,
      name: "Henrique Romão Tardoni",
      description: "Responsável pelo desenvolvimento de front-end e back-end, bem como ideias ao decorrer do projeto.\n\nAtualmente (2025), trabalha na ONG \"ApoiaSp\" ",
      image: "/henrique.jpeg"
    },
    {
      id: 5,
      name: "Danilton Mota Braga",
      description: "Responsável pelo desenvolvimento de front-end e back-end, bem como pesquisa para ferramentas de otimização e aperfeiçoamento do código.\n\nAtualmente (2025), trabalha na ONG \"ApoiaSp\" ",
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

  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <Header 
          title="APOIASP"
          subtitle="Se interessou pelo projeto? Conheça mais sobre ele e seus criadores!"
          titleColor="mixed"
        />

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

            {/* Diagram Image */}
            <Card className="border border-solid border-[#fcfdeb] bg-transparent p-4 md:p-6">
              <CardContent className="p-0">
                <div className="w-full flex justify-center">
                  <img
                    src="/diagrama.png"
                    alt="Diagrama do projeto ApoiaSP mostrando a arquitetura e conexões entre os sistemas"
                    className="w-full max-w-4xl h-auto rounded-lg"
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
        <Footer />
      </div>
    </div>
  );
};