import { FunctionComponent } from "react";
import RegistrationForm from "../components/RegistrationForm";

export type RegisterPageType = {
  onClose?: () => void;
};

const RegisterPage: FunctionComponent<RegisterPageType> = ({ onClose }) => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <div className="flex-1 [backdrop-filter:blur(200px)] [background:linear-gradient(90deg,_#6053f8,_#b3619e)] flex flex-row items-end justify-start max-w-full max-h-full overflow-auto">
        <img
          className="h-[1078px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-overlay min-h-[1078px] z-[1]"
          alt=""
          src="/coderitsolution-14375-back-view-of-a-foreman-in-a-safety-helmet-59c756ee69424160a089426ef1a30970-1@2x.png"
        />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;
