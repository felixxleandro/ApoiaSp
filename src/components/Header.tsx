import Navbar from "./navbar";

interface HeaderProps {
  title: string;
  subtitle: string;
  titleColor?: "default" | "mixed";
}

export const Header = ({
  title,
  subtitle,
  titleColor = "default",
}: HeaderProps): JSX.Element => {
  return (
    <header className="relative min-h-screen w-screen overflow-hidden">
      {/* Fundo que preenche toda a tela - usando posição fixa para garantir largura total */}
      <div 
        className="fixed inset-0 w-screen h-screen"
        style={{ backgroundColor: "#1654DF" }}
      />
      
      {/* Gradiente opcional para dar mais profundidade */}
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-blue-600/20 to-blue-900/20" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            {titleColor === "mixed" ? (
              <span className="text-white">
                <span className="text-white">APOIA</span>
                <span className="text-yellow-400 ml-2">SP</span>
              </span>
            ) : (
              <span className="text-white">{title}</span>
            )}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Elemento decorativo opcional */}
      <div className="fixed bottom-0 left-0 right-0 w-screen h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </header>
  );
};