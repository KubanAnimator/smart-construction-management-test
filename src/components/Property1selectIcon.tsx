import { FunctionComponent } from "react";

export type Property1selectIconType = {
  className?: string;
  property1select?: string;
};

const Property1selectIcon: FunctionComponent<Property1selectIconType> = ({
  className = "",
  property1select,
}) => {
  return (
    <img
      className={`absolute top-[9px] right-[9.6px] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl w-[537.8px] h-[500px] overflow-hidden object-cover ${className}`}
      alt=""
      src={property1select}
    />
  );
};

export default Property1selectIcon;
