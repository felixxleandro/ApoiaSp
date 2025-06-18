import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const Chatbot = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Eu sou o assistente virtual do ApoiaSP. Como posso te ajudar hoje? Posso esclarecer dúvidas sobre benefícios sociais, programas governamentais, documentação necessária e muito mais!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("auxílio") || lowerMessage.includes("auxilio")) {
      return "Existem diversos auxílios disponíveis! Os principais são: Auxílio Brasil, Auxílio Gás, Vale Gás, BPC (Benefício de Prestação Continuada) e auxílios emergenciais. Para saber quais você tem direito, preciso conhecer sua situação. Você tem renda familiar? Quantas pessoas moram na sua casa?";
    }
    
    if (lowerMessage.includes("documentos") || lowerMessage.includes("documento")) {
      return "Para solicitar benefícios, geralmente você precisa de: CPF, RG, Comprovante de residência, Comprovante de renda (ou declaração de que não tem renda), Carteira de Trabalho, e dependendo do benefício, outros documentos específicos. Qual benefício você quer solicitar?";
    }
    
    if (lowerMessage.includes("cadastro único") || lowerMessage.includes("cadúnico")) {
      return "O Cadastro Único é fundamental para acessar programas sociais! Você pode se cadastrar no CRAS (Centro de Referência de Assistência Social) mais próximo da sua casa. Leve RG, CPF, comprovante de residência e carteira de trabalho de todos da família. É gratuito e obrigatório para receber benefícios como Auxílio Brasil.";
    }
    
    if (lowerMessage.includes("cras") || lowerMessage.includes("centro")) {
      return "O CRAS é o Centro de Referência de Assistência Social. Lá você pode: fazer o Cadastro Único, solicitar benefícios, participar de programas sociais, receber orientação sobre seus direitos. Para encontrar o CRAS mais próximo, você pode ligar para 156 ou consultar no site da prefeitura da sua cidade.";
    }
    
    if (lowerMessage.includes("idoso") || lowerMessage.includes("idosa")) {
      return "Pessoas idosas têm direitos especiais! Principais benefícios: BPC (1 salário mínimo para quem tem 65+ anos e baixa renda), Aposentadoria por idade, Passe livre no transporte, Desconto em medicamentos, Atendimento prioritário. Você ou alguém da família tem mais de 65 anos?";
    }
    
    if (lowerMessage.includes("deficiência") || lowerMessage.includes("deficiente")) {
      return "Pessoas com deficiência têm direitos garantidos! Principais benefícios: BPC (1 salário mínimo), Passe livre no transporte, Auxílio-inclusão, Cotas em concursos públicos, Isenção de impostos na compra de veículos. É importante ter o laudo médico atualizado. Posso te ajudar com mais informações sobre algum benefício específico?";
    }
    
    if (lowerMessage.includes("trabalho") || lowerMessage.includes("emprego")) {
      return "Para buscar trabalho, você pode: Se cadastrar no SINE (Sistema Nacional de Emprego), Procurar o PAT (Posto de Atendimento ao Trabalhador), Usar o app Carteira de Trabalho Digital, Participar de cursos de qualificação gratuitos. Também existem programas como Jovem Aprendiz e vagas para pessoas com deficiência. Que tipo de trabalho você procura?";
    }
    
    if (lowerMessage.includes("obrigado") || lowerMessage.includes("obrigada") || lowerMessage.includes("valeu")) {
      return "Fico feliz em ajudar! Lembre-se: seus direitos são importantes e você não precisa passar por dificuldades sozinho(a). Se precisar de mais alguma coisa, estarei aqui. Você também pode responder nosso questionário completo para descobrir todos os benefícios que tem direito!";
    }
    
    return "Entendi sua pergunta! Para te dar a melhor orientação, preciso de mais detalhes sobre sua situação. Você pode me contar: sua idade, se tem renda, quantas pessoas moram com você, se tem alguma deficiência ou condição especial? Assim posso te indicar exatamente quais benefícios e programas você tem direito!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-[#fcfdeb] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#fcfdeb] overflow-hidden w-full max-w-[1440px] relative">
        {/* Hero Section */}
        <Header 
          title="ASSISTENTE VIRTUAL"
          subtitle="Tire suas dúvidas sobre benefícios e direitos sociais"
        />

        {/* Chat Container */}
        <main className="px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 sm:py-8 md:py-[50px]">
          <Card className="w-full max-w-[1000px] mx-auto h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border-none shadow-lg overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col">
              {/* Chat Header */}
              <div className="bg-[#322030] p-3 sm:p-4 md:p-6 flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#c1a2a0] rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#322030]" />
                </div>
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-sm sm:text-base md:text-lg">
                    Assistente ApoiaSP
                  </h3>
                  <p className="font-['Poppins',Helvetica] text-[#fcfdeb] text-xs sm:text-sm opacity-80">
                    Online - Pronto para ajudar
                  </p>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] md:max-w-[70%] p-3 sm:p-4 rounded-[15px] sm:rounded-[18px] md:rounded-[20px] ${
                        message.isUser
                          ? "bg-[#322030] text-[#fcfdeb] ml-2 sm:ml-4"
                          : "bg-[#e3cebd] text-[#322030] mr-2 sm:mr-4"
                      }`}
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        {!message.isUser && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#322030] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#fcfdeb]" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-['Poppins',Helvetica] text-xs sm:text-sm md:text-[15px] leading-relaxed">
                            {message.text}
                          </p>
                          <span className="text-[10px] sm:text-[11px] md:text-[12px] opacity-70 mt-1 sm:mt-2 block">
                            {message.timestamp.toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        {message.isUser && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#c1a2a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#322030]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] sm:max-w-[80%] md:max-w-[70%] p-3 sm:p-4 rounded-[15px] sm:rounded-[18px] md:rounded-[20px] bg-[#e3cebd] text-[#322030] mr-2 sm:mr-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#322030] rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#fcfdeb]" />
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#322030] rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#322030] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#322030] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-[#e3cebd] p-3 sm:p-4 md:p-6">
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua pergunta sobre benefícios..."
                    className="flex-1 h-10 sm:h-11 md:h-12 px-3 sm:px-4 rounded-[20px] sm:rounded-[22px] md:rounded-[25px] border-2 border-[#e3cebd] focus:border-[#322030] font-['Poppins',Helvetica] text-xs sm:text-sm md:text-[15px]"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-[#322030] hover:bg-[#725b75] text-[#fcfdeb] flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
                <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#322030] opacity-60 mt-1 sm:mt-2 text-center font-['Poppins',Helvetica]">
                  Pressione Enter para enviar • Este assistente fornece orientações gerais
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="max-w-[1000px] mx-auto mt-6 sm:mt-8">
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#322030] text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-center">
              Perguntas frequentes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "Como fazer o Cadastro Único?",
                "Como é estudar n escola da nuvem?",
                "Onde fica o CRAS mais próximo?",
                "Benefícios para idosos",
                "Direitos da pessoa com deficiência",
                "Como buscar emprego?"
              ].map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setInputMessage(question)}
                  className="h-auto p-3 sm:p-4 rounded-[15px] sm:rounded-[18px] md:rounded-[20px] border-[#322030] text-[#322030] hover:bg-[#322030] hover:text-[#fcfdeb] font-['Poppins',Helvetica] text-xs sm:text-sm md:text-[14px] text-left justify-start whitespace-normal"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};