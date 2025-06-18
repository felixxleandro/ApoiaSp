import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <Header 
          title="APOIASP"
          subtitle="Conectando pessoas aos seus direitos. Informação que transforma, acesso que inclui."
          titleColor="mixed"
        />

        {/* Main Content */}
        <main className="px-4 sm:px-6 md:px-8 lg:px-[120px]">
          {/* Benefits Section */}
          <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-[100px]">
            <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-[53px]">
              <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-lg sm:text-xl md:text-2xl lg:text-[27px] text-center lg:text-left">
                Encontre benefícios e oportunidades perfeitas para você
              </h2>
              <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-[53px] font-['Poppins',Helvetica] text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px] text-center lg:text-left">
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

            <div className="flex flex-col xl:flex-row mt-8 sm:mt-12 md:mt-16 lg:mt-[159px] gap-6 sm:gap-8">
              {/* How to use section */}
              <div className="w-full xl:w-[353px] xl:mr-[55px]">
                <h3 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-lg sm:text-xl md:text-2xl lg:text-[27px] text-center xl:text-left">
                  Como usar?
                </h3>
                <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-[59px] font-['Poppins',Helvetica] text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px] text-center xl:text-left">
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
              <div className="relative flex-1">
                <div className="w-full bg-[#322030] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[34px] mb-4 sm:mb-6 md:mb-8">
                    <Card className="flex-1 bg-[#e3cebd] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-none shadow-none">
                      <CardContent className="flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-64 xl:h-[378px] p-3 sm:p-4">
                        <p className="font-['Poppins',Helvetica] text-[#322030] text-xs sm:text-sm md:text-base lg:text-[17px] text-center">
                          Responda algumas perguntas rápidas para que possamos
                          entender seu perfil e te mostrar os serviços, benefícios
                          e programas que mais combinam com a sua situação.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="flex-1 bg-[#e3cebd] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-none shadow-none">
                      <CardContent className="flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-64 xl:h-[378px] p-3 sm:p-4">
                        <p className="font-['Poppins',Helvetica] text-[#322030] text-xs sm:text-sm md:text-base lg:text-[17px] text-center">
                          Converse com nosso assistente virtual! Tire dúvidas,
                          peça orientações e encontre informações de forma
                          simples, rápida e acessível, 24h por dia e 7 dias por
                          semana!
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <Button
                      variant="outline"
                      className="w-full sm:flex-1 h-10 sm:h-12 md:h-14 lg:h-16 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-[#322030] font-['Poppins',Helvetica] font-bold text-[#322030] text-xs sm:text-sm md:text-base lg:text-[13px] bg-[#fcfdeb] hover:bg-[#e3cebd]"
                    >
                      QUERO RESPONDER O QUESTIONÁRIO
                    </Button>
                    <Link to="/chatbot" className="w-full sm:flex-1">
                      <Button
                        variant="outline"
                        className="w-full h-10 sm:h-12 md:h-14 lg:h-16 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-[#322030] font-['Poppins',Helvetica] font-bold text-[#322030] text-xs sm:text-sm md:text-base lg:text-[13px] bg-[#fcfdeb] hover:bg-[#e3cebd]"
                      >
                        QUERO FALAR COM O ASSISTENTE
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-[196px]">
            <div className="text-center lg:text-right mb-6 sm:mb-8 md:mb-12 lg:mb-[61px]">
              <h2 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-lg sm:text-xl md:text-2xl lg:text-[27px]">
                Um pouco mais sobre o ApoiaSP
              </h2>
              <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-[60px] font-['Poppins',Helvetica] text-[#322030] text-sm sm:text-base md:text-lg lg:text-[17px]">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
              {techCards.map((card) => (
                <Card
                  key={card.id}
                  className="aspect-square bg-[#e3cebd] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-none shadow-none opacity-70"
                >
                  <CardContent className="flex items-center justify-center h-full p-0">
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[94px] xl:h-[94px]"
                      alt={card.alt}
                      src={card.icon}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technology Descriptions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {techCards.map((card) => (
                <div key={card.id} className="text-center">
                  <h4 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-xs sm:text-sm md:text-base lg:text-[17px]">
                    {card.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 lg:mt-[7px] font-['Poppins',Helvetica] text-[#322030] text-xs sm:text-sm md:text-base lg:text-[17px]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};