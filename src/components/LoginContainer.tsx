import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type LoginContainerType = {
  className?: string;
};

const LoginContainer: FunctionComponent<LoginContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[1017px] rounded-tl-81xl rounded-tr-11xl rounded-br-11xl rounded-bl-81xl bg-white w-[903px] flex flex-col items-end justify-start pt-[100px] pb-[71px] pr-32 pl-[70px] box-border gap-[303px] max-w-full z-[2] text-left text-71xl text-black font-cygre-medium ${className}`}
    >
      <div className="w-[903px] h-[1080px] relative rounded-tl-81xl rounded-tr-11xl rounded-br-11xl rounded-bl-81xl bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[59px] max-w-full">
        <h1 className="m-0 w-[544px] h-[180px] relative text-inherit tracking-[-0.4px] leading-[100%] uppercase font-medium font-inherit flex items-center max-w-full z-[3] mq450:text-8xl mq450:leading-[36px] mq950:text-26xl mq950:leading-[54px]">
          ВХОД в аккаунт
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-16xl text-white">
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[99px] [backdrop-filter:blur(200px)] font-cygre-medium font-medium text-16xl text-color z-[3]"
            placeholder="ПОЧТА"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#6053f8" },
              "& .MuiInputBase-root": {
                height: "99px",
                borderRadius: "100px 30px 100px 30px",
                fontSize: "35px",
              },
              "& .MuiInputBase-input": { color: "#6a6a6a" },
            }}
          />
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[99px] [backdrop-filter:blur(200px)] font-cygre-medium font-medium text-16xl text-color z-[3]"
            placeholder="ПАРОЛЬ"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#6053f8" },
              "& .MuiInputBase-root": {
                height: "99px",
                borderRadius: "100px 30px 100px 30px",
                fontSize: "35px",
              },
              "& .MuiInputBase-input": { color: "#6a6a6a" },
            }}
          />
          <div className="w-[560px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] overflow-hidden flex flex-row items-start justify-start pt-8 px-[63px] pb-[37px] box-border relative gap-[5px] max-w-full z-[3]">
            <div className="relative tracking-[-0.4px] leading-[100%] font-medium mq450:text-2xl mq450:leading-[21px] mq950:text-9xl mq950:leading-[28px]">
              ВОЙТИ
            </div>
            <img
              className="h-[70.7px] w-[70.7px] absolute !m-[0] top-[16.6px] right-[50.3px] object-contain"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full text-16xl text-color">
        <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq950:flex-wrap">
          <div className="relative tracking-[-0.4px] leading-[100%] font-medium z-[3] mq450:text-2xl mq450:leading-[21px] mq950:text-9xl mq950:leading-[28px]">
            ЗАБЫЛИ ПАРОЛЬ?
          </div>
          <div className="relative tracking-[-0.4px] leading-[100%] font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_#6053f8,_#b3619e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[3] mq450:text-2xl mq450:leading-[21px] mq950:text-9xl mq950:leading-[28px]">
            РЕГИСТРАЦИЯ
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
