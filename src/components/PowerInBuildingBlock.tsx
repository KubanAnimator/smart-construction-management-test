import { FunctionComponent } from "react";

export type PowerInBuildingBlockType = {
  className?: string;
};

const PowerInBuildingBlock: FunctionComponent<PowerInBuildingBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[7194px] left-[-282px] w-[2709.1px] h-[1605px] text-left text-106xl text-black font-cygre ${className}`}
    >
      <b className="absolute top-[0px] left-[382px] tracking-[-0.4px] leading-[100%] uppercase flex items-center w-[1450px]">
        Почувствуйте силу ИИ в строительстве
      </b>
      <div className="absolute top-[0px] left-[0px] w-[2709.1px] h-[1605px] overflow-hidden">
        <img
          className="absolute top-[327px] left-[calc(50%_-_972.55px)] w-[705px] h-[333px] object-contain"
          alt=""
          src="/group-37@2x.png"
        />
        <img
          className="absolute top-[327px] left-[calc(50%_-_247.55px)] w-[705px] h-[333px] object-contain"
          alt=""
          src="/group-38@2x.png"
        />
        <img
          className="absolute top-[710px] left-[calc(50%_-_680.55px)] w-[705px] h-[333px] object-contain"
          alt=""
          src="/group-39@2x.png"
        />
        <img
          className="absolute top-[710px] left-[calc(50%_+_44.45px)] w-[705px] h-[333px] object-contain"
          alt=""
          src="/group-40@2x.png"
        />
        <img
          className="absolute top-[1093px] left-[calc(50%_-_392.55px)] w-[705px] h-[333px] object-contain"
          alt=""
          src="/group-41@2x.png"
        />
        <img
          className="absolute top-[663px] left-[0px] w-[942px] h-[942px] object-cover"
          alt=""
          src="/-1@2x.png"
        />
        <img
          className="absolute top-[0px] right-[0px] w-[1254.1px] h-[1254.1px] object-contain"
          alt=""
          src="/-1@2x.png"
        />
      </div>
    </div>
  );
};

export default PowerInBuildingBlock;
