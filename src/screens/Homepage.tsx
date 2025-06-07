import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import Navbar from "../components/navbar";

export const Homepage = (): JSX.Element => {
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

  // Social media icons
  const socialIcons = [
    { id: 1, icon: "/logo-tiktok.svg", alt: "Logo tiktok" },
    { id: 2, icon: "/logo-facebook.svg", alt: "Logo facebook" },
    { id: 3, icon: "/logo-linkedin.svg", alt: "Logo linkedin" },
    { id: 4, icon: "/logo-instagram.svg", alt: "Logo instagram" },
  ];

  // Navigation items

  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <header className="relative w-full h-[804px]">
          <div className="absolute w-full h-[804px] top-0 left-0 bg-[url(/foto-painel.png)] bg-cover bg-[50%_50%]">
            <div className="h-full w-full bg-[#322030f2]" />
          </div>

          {/* Logo and Navigation */}
          <Navbar />

          {/* Hero Content */}
          <div className="absolute w-full max-w-[1204px] top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className="font-['Nunito',Helvetica] font-black text-[86px] tracking-[0] leading-normal whitespace-nowrap">
              <span className="text-[#fcfdeb]">APOIA</span>
              <span className="text-[#c1a2a0]">SP</span>
            </h1>
            <p className="mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[25px]">
              Conectando pessoas aos seus direitos. Informação que transforma,
              acesso que inclui.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-[120px]">
          {/* Benefits Section */}
          <section className="mt-[100px]">
            <div className="mb-[53px]">
              <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-[27px]">
                Encontre benefícios e oportunidades perfeitas para você
              </h2>
              <p className="mt-[53px] font-['Poppins',Helvetica] text-[#322030] text-[17px]">
                <span>Responda um </span>
                <span className="font-bold">questionário direto</span>
                <span> e descubra quais </span>
                <span className="font-bold">
                  serviços, benefícios e programas você pode ter
                </span>
                <span>. Além disso, com a ajuda do nosso </span>
                <span className="font-bold">assistente virtual</span>
                <span>
                  , você recebe orientações claras e práticas para garantir seus
                  direitos de forma fácil e rápida!
                </span>
              </p>
            </div>

            <div className="flex mt-[159px]">
              {/* How to use section */}
              <div className="w-[353px] mr-[55px]">
                <h3 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-[27px]">
                  Como usar?
                </h3>
                <p className="mt-[59px] font-['Poppins',Helvetica] text-[#322030] text-[17px]">
                  <span>Responda a um </span>
                  <span className="font-bold">questionário mais longo</span>
                  <span>
                    {" "}
                    para descobrir todos os benefícios e auxílios aos quais você
                    tem direito,
                  </span>
                  <br />
                  <br />
                  <span className="font-bold">OU</span>
                  <br />
                  <br />
                  <span>Fale diretamente com nosso </span>
                  <span className="font-bold">assistente virtual</span>
                  <span>
                    {" "}
                    para tirar dúvidas específicas, entender melhor algum
                    serviço ou buscar por benefícios pontuais.
                  </span>
                </p>
              </div>

              {/* Cards Section */}
              <div className="relative">
                <div className="absolute w-[863px] h-[520px] bg-[#322030] rounded-[50px]"></div>

                <div className="flex space-x-[34px] absolute left-[-50px] top-[71px]">
                  <Card className="w-[378px] h-[378px] bg-[#e3cebd] rounded-[50px] border-none shadow-none">
                    <CardContent className="flex items-center justify-center h-full">
                      <p className="w-[296px] font-['Poppins',Helvetica] text-[#322030] text-[17px] text-center">
                        Responda algumas perguntas rápidas para que possamos
                        entender seu perfil e te mostrar os serviços, benefícios
                        e programas que mais combinam com a sua situação.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="w-[378px] h-[378px] bg-[#e3cebd] rounded-[50px] border-none shadow-none">
                    <CardContent className="flex items-center justify-center h-full">
                      <p className="w-[296px] font-['Poppins',Helvetica] text-[#322030] text-[17px] text-center">
                        Converse com nosso assistente virtual! Tire dúvidas,
                        peça orientações e encontre informações de forma
                        simples, rápida e acessível, 24h por dia e 7 dias por
                        semana!
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex space-x-[122px] absolute left-[-5px] top-[329px]">
                  <Button
                    variant="outline"
                    className="w-[289px] h-16 rounded-[50px] border-[#322030] font-['Poppins',Helvetica] font-bold text-[#322030] text-[13px]"
                  >
                    QUERO RESPONDER O QUESTIONÁRIO
                  </Button>
                  <Button
                    variant="outline"
                    className="w-[289px] h-16 rounded-[50px] border-[#322030] font-['Poppins',Helvetica] font-bold text-[#322030] text-[13px]"
                  >
                    QUERO FALAR COM O ASSISTENTE
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mt-[196px]">
            <div className="text-right mb-[61px]">
              <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-[27px]">
                Um pouco mais sobre o ApoiaSP
              </h2>
              <p className="mt-[60px] font-['Poppins',Helvetica] text-[#322030] text-[17px]">
                O ApoiaSP é um projeto de conclusão de curso da Escola da Nuvem,
                criado para solucionar o desafio de acesso a serviços públicos
                por pessoas em situação de vulnerabilidade da Zona Leste de São
                Paulo utilizando serviços da AWS. Nossa plataforma buscou pela
                acessibilidade fácil e rápida aos usuários, de forma que fosse
                fácil de usar para idosos ou pessoas em diferentes níveis de
                analfabetismo. A ideia nasceu da constatação de que, geralmente,
                é muito difícil encontrar informações claras em sites
                governamentais e localizar ONGs que ofereçam apoio.
                <br />
                <br />
                <br />
                <span className="font-bold">
                  O projeto foi feito utilizando:
                </span>
              </p>
            </div>

            {/* Technology Cards */}
            <div className="flex justify-between mb-[20px]">
              {techCards.map((card, index) => (
                <Card
                  key={card.id}
                  className="w-56 h-56 bg-[#e3cebd] rounded-[50px] border-none shadow-none opacity-70"
                >
                  <CardContent className="flex items-center justify-center h-full p-0">
                    <img
                      className="w-[94px] h-[94px]"
                      alt={card.alt}
                      src={card.icon}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technology Descriptions */}
            <div className="flex justify-between mt-[20px]">
              {techCards.map((card) => (
                <div key={card.id} className="w-56 text-center">
                  <h4 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-[17px]">
                    {card.title}
                  </h4>
                  <p className="mt-[7px] font-['Poppins',Helvetica] text-[#322030] text-[17px]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-[100px]">
          <Separator className="w-full h-px bg-[#322030]" />

          <div className="flex justify-between items-center px-[120px] py-[33px]">
            <div className="flex items-center">
              <img className="w-[41px] h-[41px]" alt="Logo" src="/logo.png" />
              <span className="ml-[11px] font-['Poppins',Helvetica] font-bold text-[#322030] text-base">
                ApoiaSp
              </span>
            </div>

            <p className="font-['Inter',Helvetica] font-medium text-[#322030] text-base text-center">
              © 2025 - Todos os direitos reservados a ApoiaSP.
            </p>

            <div className="flex space-x-[24px]">
              {socialIcons.map((icon) => (
                <a key={icon.id} href="#" aria-label={icon.alt}>
                  <img
                    className="w-[15px] h-[15px]"
                    alt={icon.alt}
                    src={icon.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
