import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/registerpage");
  }, [navigate]);

  return (
    <div
      className={`absolute w-[calc(100%_-_199px)] top-[22px] right-[100px] left-[99px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] h-[90px] text-left text-11xl text-black font-cygre ${className}`}
    >
      <div className="absolute top-[-22px] left-[0px] w-[1721px] h-[134px] overflow-hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_860.5px)] [backdrop-filter:blur(30px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.28)_34.5%,_rgba(0,_0,_0,_0))] w-[1721px] h-[121px]" />
      </div>
      <div className="absolute top-[31px] left-[calc(50%_-_691.5px)] flex flex-row items-start justify-start gap-[24px]">
        <div className="relative tracking-[-0.45px] leading-[28px] uppercase">
          О продукте
        </div>
        <div className="relative tracking-[-0.45px] leading-[28px] uppercase">
          Функции
        </div>
        <div className="relative tracking-[-0.45px] leading-[28px] uppercase">
          Принцип работы
        </div>
        <div className="relative tracking-[-0.45px] leading-[28px] uppercase">
          Преимущества
        </div>
        <div className="relative tracking-[-0.45px] leading-[28px] uppercase">
          Контакты
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_788.5px)] rounded-981xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] w-[72px] h-[72px]" />
      <div className="absolute top-[31px] left-[calc(50%_+_461.5px)] flex flex-row items-start justify-start gap-[24px]">
        <div
          className="relative tracking-[-0.45px] leading-[28px] uppercase cursor-pointer"
          onClick={onTextClick}
        >
          Войти
        </div>
        <div
          className="relative tracking-[-0.45px] leading-[28px] uppercase cursor-pointer"
          onClick={onTextClick1}
        >
          Регистрация
        </div>
      </div>
    </div>
  );
};

export default NavBar;
