export const TitleSection = (): JSX.Element => {
  return (
    <div className="absolute w-full px-4 top-[250px] md:top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
      <h1 className="font-['Nunito',Helvetica] font-black text-4xl md:text-6xl lg:text-[86px] tracking-[0] leading-normal">
        <span className="text-[#fcfdeb]">APOIA</span>
        <span className="text-[#c1a2a0]">SP</span>
      </h1>
      <p className="mt-4 md:mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-lg md:text-xl lg:text-[25px] px-4">
        Se interessou pelo projeto? Conheça mais sobre ele e seus criadores!
      </p>
    </div>
  );
};