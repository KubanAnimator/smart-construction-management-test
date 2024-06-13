import { FunctionComponent } from "react";
import AboutProductBlock from "../components/AboutProductBlock";
import HowItWorksBlock from "../components/HowItWorksBlock";
import PowerInBuildingBlock from "../components/PowerInBuildingBlock";
import FooterBlock from "../components/FooterBlock";
import GuideBlock from "../components/GuideBlock";
import MainTextBlock from "../components/MainTextBlock";
import NavBar from "../components/NavBar";
import FunctionsBlock from "../components/FunctionsBlock";

const StartPage: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-aliceblue h-[10828px] overflow-hidden">
      <AboutProductBlock />
      <HowItWorksBlock />
      <div className="absolute top-[7282px] left-[-282px] w-[2709px] h-[1401px]" />
      <PowerInBuildingBlock />
      <FooterBlock />
      <GuideBlock />
      <MainTextBlock />
      <NavBar />
      <FunctionsBlock />
    </div>
  );
};

export default StartPage;
