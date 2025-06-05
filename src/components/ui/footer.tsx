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
              © 2025 - Todos os direitos reservados a ApoiaSP. Criado por Taina
              Alves de Oliveira
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