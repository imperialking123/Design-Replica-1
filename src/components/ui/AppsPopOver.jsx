import { useEffect, useRef, useState } from "react";
import linkInBioSvg from "../../assets/icons/linkinbio.svg";
import inVoicingSvg from "../../assets/icons/invoicing.svg";
import storeSvg from "../../assets/icons/store.svg";
import mediaKitSvg from "../../assets/icons/mediakit.svg";
import bookingSvg from "../../assets/icons/bookings.svg";
import { GoChevronRight } from "react-icons/go";

const AppsPopOver = ({ setSelectedButton, setSelectedApp }) => {
  const [parentButtonDomRect, setParentButtonDomRect] = useState(null);

  const elRef = useRef(null);

  useEffect(() => {
    function calculatePopOver() {
      const parentButtonDomRect = document
        .getElementById("topBarApps")
        ?.getBoundingClientRect();

      if (parentButtonDomRect) {
        setParentButtonDomRect(parentButtonDomRect);
      }
    }

    calculatePopOver();

    window.addEventListener("resize", calculatePopOver);

    return () => window.removeEventListener("resize", calculatePopOver);
  }, []);
  useEffect(() => {
    const eventHandler = (event) => {
      if (elRef.current && !elRef.current.contains(event.target)) {
        setSelectedButton("");
      }
    };

    document.addEventListener("click", eventHandler);

    return () => document.removeEventListener("click", eventHandler);
  }, []);

  if (!parentButtonDomRect) return null;

  const offSet = -5;
  const top = `${parentButtonDomRect.bottom + offSet}px`;
  const left = `${parentButtonDomRect.left / 1.09}px`;

  const appArray = [
    {
      title: "Link in Bio",
      iconSVG: linkInBioSvg,
      text: "Manage your Link in Bio",
    },
    {
      title: "Store",
      iconSVG: storeSvg,
      text: "Manage your store activities",
    },
    {
      title: "Media Kit",
      iconSVG: mediaKitSvg,
      text: "Manage your Media kit",
    },
    {
      title: "Invoicing",
      iconSVG: inVoicingSvg,
      text: "Manage your Invoices",
    },
    {
      title: "Bookings",
      iconSVG: bookingSvg,
      text: "Manage your Bookings",
    },
  ];

  const handleClickButton = (title) => {
    setSelectedApp(title);
    setSelectedButton("");
  };

  return (
    <div
      style={{
        top,
        left,
      }}
      ref={elRef}
      className={`fixed z-999 bg-white gap-1 flex flex-col shadow-md min-w-80 max-w-80 p-2.5 rounded-[15px] `}
    >
      {appArray.map((app) => {
        return (
          <button
            onClick={() => handleClickButton(app.title)}
            key={app.title}
            id={app.title}
            className="flex group p-2.5 transition duration-500 ease-in-out  rounded-2xl min-w-full hover:shadow-md relative items-center"
          >
            <div className="size-[35px] border border-solid border-gray-200 rounded-md items-center flex justify-center">
              <img
                className="size-30px flex items-center justify-center "
                src={app.iconSVG}
              />
            </div>

            <div className="flex-1  group-hover:ml-1 ml-2 text-sm flex flex-col items-start ">
              <p className="font-bold">{app.title}</p>
              <p className="font-extralight">{app.text}</p>
            </div>

            <GoChevronRight className="opacity-0 group-hover:opacity-100" />
          </button>
        );
      })}
    </div>
  );
};

export default AppsPopOver;
