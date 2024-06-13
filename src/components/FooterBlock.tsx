import { FunctionComponent } from "react";

export type FooterBlockType = {
  className?: string;
};

const FooterBlock: FunctionComponent<FooterBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute w-full top-[9656px] right-[0px] left-[0px] rounded-t-81xl rounded-b-none [background:linear-gradient(180deg,_#dddbff_78.9%,_#beb9ff)] h-[1172px] text-left text-71xl text-black font-cygre-medium ${className}`}
    >
      <div className="absolute top-[1012px] left-[100px] tracking-[-0.4px] leading-[100%] uppercase font-medium">
        © devdiamonds, 2024
      </div>
      <div className="absolute top-[120px] left-[100px] w-[923px] h-[812px] font-cygre">
        <div className="absolute top-[0px] left-[0px] w-[923px] h-[383px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.4px] leading-[100%] uppercase">
            СВЯЗАТЬСЯ С НАМИ
          </div>
          <div className="absolute top-[170px] left-[0px] w-[705px] h-[213px] overflow-hidden text-16xl text-color font-cygre-medium">
            <div className="absolute top-[114px] left-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[705px] overflow-hidden flex flex-row items-center justify-start py-8 px-[63px] border-[5px] border-solid border-mediumslateblue">
              <div className="relative tracking-[-0.4px] leading-[100%] font-medium">
                E-MAIL
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[705px] overflow-hidden flex flex-row items-center justify-start py-8 px-[63px] border-[5px] border-solid border-mediumslateblue">
              <div className="relative tracking-[-0.4px] leading-[100%] font-medium">
                ИМЯ
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[398px] left-[0px] w-[705px] h-[414px] overflow-hidden text-16xl text-white font-cygre-medium">
          <div className="absolute top-[310px] left-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] w-[560px] h-[104px] overflow-hidden">
            <div className="absolute top-[32px] left-[63px] tracking-[-0.4px] leading-[100%] font-medium">
              ОТПРАВИТЬ
            </div>
            <img
              className="absolute h-[67.98%] w-[12.63%] top-[15.96%] right-[8.98%] bottom-[16.06%] left-[78.39%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[705px] h-[295px] overflow-hidden flex flex-row items-start justify-start py-8 px-[63px] text-color border-[5px] border-solid border-mediumslateblue">
            <div className="relative tracking-[-0.4px] leading-[100%] font-medium">
              СООБЩЕНИЕ
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] left-[1237px] w-[583px] h-[740px] text-46xl">
        <div className="absolute top-[161px] left-[-122px] w-[583px] h-[126px] overflow-hidden">
          <div className="absolute top-[0px] right-[29px] w-[554px] flex flex-col items-start justify-start gap-[25px]">
            <div className="self-stretch relative tracking-[-0.4px] leading-[100%] uppercase font-medium">
              график работы
            </div>
            <div className="self-stretch relative text-17xl-1 tracking-[-0.4px] leading-[100%] uppercase font-cygre-book text-color">
              Пн-Пт: 9:00 - 18:00
            </div>
          </div>
        </div>
        <div className="absolute top-[10px] left-[-122px] w-[583px] flex flex-col items-start justify-start gap-[25px]">
          <div className="self-stretch relative tracking-[-0.4px] leading-[100%] uppercase font-medium">
            адрес офиса
          </div>
          <div className="self-stretch relative text-17xl-1 tracking-[-0.4px] leading-[100%] uppercase font-cygre-book text-color">
            г. Краснодар, ул. Примерная, д. 123
          </div>
        </div>
        <div className="absolute top-[312px] left-[-122px] w-[583px] h-[126px] overflow-hidden">
          <div className="absolute top-[0px] right-[280px] w-[303px] flex flex-col items-start justify-start gap-[25px]">
            <div className="relative tracking-[-0.4px] leading-[100%] uppercase font-medium">
              телефон
            </div>
            <div className="relative text-17xl-1 tracking-[-0.4px] leading-[100%] uppercase font-cygre-book text-color">
              +7 (495) 123-45-67
            </div>
          </div>
        </div>
        <div className="absolute top-[463px] left-[-122px] w-[583px] h-[126px] overflow-hidden">
          <div className="absolute top-[0px] right-[129px] w-[454px] flex flex-col items-start justify-start gap-[25px]">
            <div className="relative tracking-[-0.4px] leading-[100%] uppercase font-medium">
              почта
            </div>
            <div className="relative text-17xl-1 tracking-[-0.4px] leading-[100%] uppercase font-cygre-book text-color">
              info@smartconstruction.com
            </div>
          </div>
        </div>
        <div className="absolute top-[614px] left-[-122px] w-[583px] h-[126px] overflow-hidden">
          <div className="absolute top-[0px] right-[235px] w-[348px] flex flex-col items-start justify-start gap-[25px]">
            <div className="relative tracking-[-0.4px] leading-[100%] uppercase font-medium">
              соц. сети
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px] text-17xl-1 text-color font-cygre-book">
              <div className="relative tracking-[-0.4px] leading-[100%] uppercase">
                Telegram
              </div>
              <div className="relative tracking-[-0.4px] leading-[100%] uppercase">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
