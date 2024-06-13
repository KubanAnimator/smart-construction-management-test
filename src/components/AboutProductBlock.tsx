import { FunctionComponent } from "react";

export type AboutProductBlockType = {
  className?: string;
};

const AboutProductBlock: FunctionComponent<AboutProductBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute w-full top-[1443px] right-[-5.21%] left-[5.21%] h-[2115px] text-left text-51xl text-black font-cygre-medium ${className}`}
    >
      <div className="absolute w-[calc(100%_-_202px)] top-[1009px] right-[202px] left-[0px] h-[1106px]">
        <div className="absolute top-[0px] left-[-4px] w-[938px] h-[893px] overflow-hidden">
          <div className="absolute top-[31.8%] left-[0px] leading-[100%] uppercase font-medium indent-[300px] flex items-center w-[938px]">
            Расширьте возможности своего строительного бизнеса с помощью
            ии-технологий для эффективного контроля работ и управления
            оборудованием
          </div>
        </div>
        <img
          className="absolute top-[0px] right-[-133px] w-[1106px] h-[1106px] object-cover"
          alt=""
          src="/image-5-1@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_207px)] top-[0px] right-[207px] left-[0px] h-[1090px] text-81xl text-color1">
        <div className="absolute top-[0px] left-[-7px] w-[612px] h-[70px] overflow-hidden">
          <div className="absolute top-[0px] left-[10px] tracking-[-4px] leading-[33px] font-medium">
            О ПРОДУКТЕ
          </div>
        </div>
        <div className="absolute top-[128px] right-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl w-[1720px] h-[962px] overflow-hidden text-51xl text-black">
          <div className="absolute top-[60px] right-[0px] leading-[100%] uppercase font-medium indent-[400px] flex items-center w-[995px]">
            Помогаем эффективно управлять персоналом и техникой, обеспечивать
            безопасность и планировать работы с использованием технологий
            искуственного интеллекта и обработки данных
          </div>
          <div className="absolute top-[60px] left-[10px] text-61xl tracking-[-0.4px] leading-[100%] uppercase font-black font-cygre-black text-transparent !bg-clip-text [background:linear-gradient(90deg,_#6053f8,_#b3619e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[650px]">
            SMART CONSTRUCTION MANAGEMENT
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProductBlock;
