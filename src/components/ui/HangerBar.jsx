import linkInBioSvg from "../../assets/icons/linkinbio.svg";
import inVoicingSvg from "../../assets/icons/invoicing.svg";
import storeSvg from "../../assets/icons/store.svg";
import mediaKitSvg from "../../assets/icons/mediakit.svg";
import { useState } from "react";

const HangerToolTip = ({ args }) => {
  const { text, DomRect } = args;

  const offSet = 40;
  const left = `${DomRect?.left + offSet}px`;
  const top = `${DomRect.top}px`;

  return (
    <div
      style={{
        left,
        top,
      }}
      className="select-none tooltip-arrow-left fixed p-1 text-sm rounded-md bg-gray-950 text-white"
    >
      {text}
    </div>
  );
};

const HangerBar = () => {
  const navsMap = [
    { icon: linkInBioSvg, text: "Link in Bio", id: "hangerLinkinBio" },
    { icon: storeSvg, text: "Store", id: "hangerStore" },
    { icon: mediaKitSvg, text: "Media Kit", id: "hangerMediaKit" },
    { icon: inVoicingSvg, text: "Invoicing", id: "hangerInvoicing" },
  ];

  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEvent = (text, id) => {
    if (!text || !id) {
      setHoveredElement(null);
      return;
    }
    const DomRect = document
      .getElementById(id.toString())
      ?.getBoundingClientRect();

    if (!DomRect) {
      setHoveredElement(null);
      return;
    }

    setHoveredElement({ text, DomRect });
  };

  return (
    <div className=" select-none min-w-[4%] flex flex-col justify-center items-center ">
      <div className="flex gap-2  items-center rounded-full flex-col min-w-[60%] p-1 shadow-md">
        {navsMap.map((navItem) => (
          <div
            id={navItem.id}
            onMouseEnter={() => handleMouseEvent(navItem.text, navItem.id)}
            onMouseLeave={() => handleMouseEvent(null)}
            className="p-1.5 transition duration-300 ease-in-out grayscale rounded-full hover:bg-gray-300 hover:grayscale-0"
            key={navItem.text}
          >
            <img className="w-4" src={navItem.icon} alt={navItem.text} />
          </div>
        ))}
      </div>

      {hoveredElement && <HangerToolTip args={hoveredElement} />}
    </div>
  );
};

export default HangerBar;
