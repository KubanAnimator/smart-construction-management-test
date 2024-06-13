import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type MainTextBlockType = {
  className?: string;
};

const MainTextBlock: FunctionComponent<MainTextBlockType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/registerpage");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[100px] left-[calc(50%_-_928px)] rounded-59xl w-[1856px] h-[502px] text-left text-141xl text-black font-cygre-semibold ${className}`}
    >
      <img
        className="absolute top-[465px] left-[794px] rounded-11xl w-[994px] h-[736px] object-cover hidden"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute top-[48px] left-[68px] w-[1720px] h-[289px] overflow-hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_857px)] tracking-[-4px] leading-[90%] uppercase flex items-center w-[1717px]">
          <span className="w-full">
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#6053f8,_#fe6d4d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              УМНЫЙ
            </span>
            <span className="font-semibold"> контроль за строительством</span>
          </span>
        </div>
      </div>
      <div className="absolute top-[362px] left-[68px] w-[1720px] h-[100px] overflow-hidden text-6xl text-color font-cygre-book">
        <div className="absolute top-[0px] left-[3px] w-[1717px] h-[100px]">
          <div className="absolute top-[17px] left-[-9px] leading-[33px] indent-[200px] flex items-center w-[1001px]">
            Революция в ваших строительных проектах с помощью нашей передовой
            платформы с встроенным искусственным интеллектом
          </div>
          <div className="absolute top-[0px] left-[1104px] w-[613px] h-[100px] overflow-hidden text-16xl text-[transparent] font-cygre-semibold">
            <div className="absolute top-[0px] left-[318px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[295px] overflow-hidden flex flex-row items-center justify-center py-0 px-[68px] border-[5px] border-solid border-mediumslateblue">
              <div
                className="relative tracking-[-3px] leading-[100px] font-semibold [-webkit-text-stroke:3px_#6053f8] cursor-pointer"
                onClick={onTextClick}
              >
                РЕГИСТРАЦИЯ
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl box-border w-[293px] overflow-hidden flex flex-row items-center justify-center py-0 px-[68px] text-black border-[5px] border-solid border-mediumslateblue">
              <div
                className="relative tracking-[-3px] leading-[100px] font-semibold cursor-pointer"
                onClick={onTextClick1}
              >
                ВОЙТИ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[94.18%] top-[487px] right-[2.91%] left-[2.91%] h-[736px] overflow-hidden">
        <img
          className="absolute w-[calc(100%_-_28px)] top-[0px] right-[14px] left-[14px] rounded-11xl max-w-full overflow-hidden h-[736px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MainTextBlock;
