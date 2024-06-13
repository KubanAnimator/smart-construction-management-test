import { FunctionComponent } from "react";
import Property1selectIcon from "./Property1selectIcon";

export type GuideBlockType = {
  className?: string;
};

const GuideBlock: FunctionComponent<GuideBlockType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[8799px] left-[100px] w-[1719.7px] h-[737px] text-left text-46xl text-black font-cygre ${className}`}
    >
      <div className="absolute top-[47px] left-[0px] w-[704px] h-[280px]">
        <b className="absolute top-[0px] left-[0px] tracking-[-0.4px] leading-[100%] uppercase inline-block w-[704px]">
          <p className="m-0">встречайте</p>
          <p className="m-0">путеводитель</p>
        </b>
        <div className="absolute top-[155px] left-[0px] text-6xl tracking-[-0.4px] leading-[100%] font-cygre-book text-color inline-block w-[561px]">
          Откроет возможности эффективного управления строительными проектами —
          узнаете, как оптимизировать рабочие процессы, повысить
          производительность и безопасность
        </div>
      </div>
      <div className="absolute top-[0px] left-[580px] w-[1139.7px] h-[737px] flex flex-row items-center justify-start gap-[24px] text-16xl font-cygre-medium">
        <div className="w-[557px] relative h-[737px]">
          <div className="absolute top-[0px] right-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[557px] h-[737px] border-[5px] border-solid border-mediumslateblue" />
          <Property1selectIcon property1select="/property-1select@2x.png" />
          <div className="absolute top-[534px] right-[71px] tracking-[-0.4px] leading-[100%] font-medium flex items-center w-[467px]">
            ВЗГЛЯНИТЕ В БУДУЩЕЕ
          </div>
          <div className="absolute top-[584px] right-[186.9px] text-6xl tracking-[-0.4px] leading-[100%] font-cygre-book text-color flex items-center w-[351.1px]">
            Узнайте, как наши интеллектуальные решения могут преобразить ваш
            бизнес
          </div>
          <img
            className="absolute top-[529.6px] right-[10.3px] w-[70.7px] h-[70.7px] object-contain"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="w-[558.7px] relative [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border h-[737px] border-[5px] border-solid border-mediumslateblue">
          <Property1selectIcon property1select="/property-1select@2x.png" />
          <div className="absolute top-[534px] right-[112px] tracking-[-0.4px] leading-[100%] font-medium flex items-center w-[419.7px]">
            УЛУЧШИТЕ СТРОЙКУ
          </div>
          <div className="absolute top-[594px] right-[39.1px] text-6xl tracking-[-0.4px] leading-[100%] font-cygre-book text-color flex items-center w-[492.6px]">
            Используйте информацию, полученную с помощью ИИ — для принятия
            обоснованных решений и оптимизации рабочих процессов
          </div>
          <img
            className="absolute top-[529.6px] right-[21px] w-[70.7px] h-[70.7px] object-contain"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GuideBlock;
