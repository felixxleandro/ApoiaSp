export const TitleSection = (): JSX.Element => {
  return (
    <div className="absolute w-full max-w-[1204px] top-[358px] left-1/2 transform -translate-x-1/2 text-center z-10">
      <h1 className="font-['Nunito',Helvetica] font-black text-[86px] tracking-[0] leading-normal whitespace-nowrap">
        <span className="text-[#fcfdeb]">APOIA</span>
        <span className="text-[#c1a2a0]">SP</span>
      </h1>
      <p className="mt-8 font-['Poppins',Helvetica] font-bold text-[#fcfdeb] text-[25px]">
        Se interessou pelo projeto? Conheça mais sobre ele e seus criadores!
      </p>
    </div>
  );
};
