import { FunctionComponent } from "react";
import LoginContainer from "../components/LoginContainer";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="h-[1080px] flex-1 relative [backdrop-filter:blur(200px)] [background:linear-gradient(90deg,_#6053f8,_#b3619e)] max-w-full mq950:h-auto mq950:min-h-[1080]">
        <img
          className="absolute h-[calc(100%_-_2px)] top-[2px] bottom-[0px] left-[0px] max-h-full w-[1263px] object-cover mix-blend-overlay z-[1]"
          alt=""
          src="/coderitsolution-14375-back-view-of-a-foreman-in-a-safety-helmet-59c756ee69424160a089426ef1a30970-1@2x.png"
        />
        <LoginContainer />
      </main>
    </div>
  );
};

export default LoginPage;
