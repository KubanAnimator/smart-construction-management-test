import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type RegistrationFormType = {
  className?: string;
};

const RegistrationForm: FunctionComponent<RegistrationFormType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[903px] rounded-tl-81xl rounded-tr-11xl rounded-br-11xl rounded-bl-81xl bg-white flex flex-col items-start justify-start pt-[100px] px-[70px] pb-[71px] box-border gap-[303px] max-w-full z-[2] ml-[-246px] text-left text-71xl text-black font-cygre-medium mq450:gap-[76px] mq450:pb-[30px] mq450:box-border mq900:gap-[151px] mq900:pl-[35px] mq900:pr-[35px] mq900:pb-[46px] mq900:box-border ${className}`}
    >
      <div className="w-[903px] h-[1080px] relative rounded-tl-81xl rounded-tr-11xl rounded-br-11xl rounded-bl-81xl bg-white hidden max-w-full" />
      <div className="w-[705px] flex flex-col items-start justify-start gap-[59px] max-w-full mq900:gap-[29px]">
        <h1 className="m-0 self-stretch h-[180px] relative text-inherit tracking-[-0.4px] leading-[100%] uppercase font-medium font-inherit flex items-center z-[3] mq450:text-8xl mq450:leading-[36px] mq900:text-26xl mq900:leading-[54px]">
          регистрация аккаунта
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
          <div className="w-[560px] [backdrop-filter:blur(200px)] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] overflow-hidden flex flex-row items-start justify-start pt-8 px-[63px] pb-[37px] box-border relative gap-[5px] max-w-full z-[3] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[-0.4px] leading-[100%] font-medium mq450:text-2xl mq450:leading-[21px] mq900:text-9xl mq900:leading-[28px]">
              РЕГИСТРАЦИЯ
            </div>
            <img
              className="h-[70.7px] w-[70.7px] absolute !m-[0] top-[16.6px] right-[50.3px] object-contain"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full text-16xl text-color mq675:pl-[31px] mq675:pr-[31px] mq675:box-border">
        <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq450:gap-[17px] mq675:flex-wrap mq675:gap-[33px]">
          <div className="relative tracking-[-0.4px] leading-[100%] font-medium z-[3] mq450:text-2xl mq450:leading-[21px] mq900:text-9xl mq900:leading-[28px]">
            ЗАБЫЛИ ПАРОЛЬ?
          </div>
          <div className="relative tracking-[-0.4px] leading-[100%] font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_#6053f8,_#b3619e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[3] mq450:text-2xl mq450:leading-[21px] mq900:text-9xl mq900:leading-[28px]">
            ВОЙТИ
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
