import { FunctionComponent } from "react";

export type FunctionsBlockType = {
  className?: string;
};

const FunctionsBlock: FunctionComponent<FunctionsBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[5597px] left-[100px] w-[1721px] h-[1477px] text-left text-71xl text-black font-cygre ${className}`}
    >
      <b className="absolute top-[0px] right-[1041px] tracking-[-0.4px] leading-[100%] uppercase flex items-center w-[663px]">
        функции
      </b>
      <img
        className="absolute w-[calc(100%_-_1016px)] top-[167px] right-[1016px] left-[0px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-28@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_1016px)] top-[167px] right-[291px] left-[725px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-29@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_1016px)] top-[612px] right-[871px] left-[145px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-30@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_1016px)] top-[612px] right-[146px] left-[870px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-31@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_1014px)] top-[1057px] right-[727px] left-[287px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-32@2x.png"
      />
      <img
        className="absolute w-[calc(100%_-_1014px)] top-[1057px] right-[0px] left-[1014px] max-w-full overflow-hidden h-[420px] object-contain"
        alt=""
        src="/group-33@2x.png"
      />
    </div>
  );
};

export default FunctionsBlock;
