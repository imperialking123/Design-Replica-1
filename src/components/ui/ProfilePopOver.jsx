import { useState, useEffect, useRef } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBugReport } from "react-icons/md";

const ProfilePopOver = ({ setShowProfilePop }) => {
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
        setShowProfilePop(false);
      }
    };

    document.addEventListener("click", eventHandler);

    return () => document.removeEventListener("click", eventHandler);
  }, []);

  if (!parentButtonDomRect) return null;

  const triggerRight = parentButtonDomRect.right;

  // 1. Define the Popover's intended width.
  // (We'll use 320px, which corresponds to Tailwind's w-80/max-w-80)
  const POPOVER_WIDTH = 320;

  // 2. Calculate the Left position for perfect right-alignment:
  //    Left = (Trigger's Right Edge) - (Popover's Width)
  const left = `${triggerRight - POPOVER_WIDTH}px`;

  const offSet = -5;
  const top = `${parentButtonDomRect.bottom + offSet}px`;

  const itemsArray = [
    { title: "Settings", icon: <IoSettingsOutline /> },
    { title: "Purchase History", icon: <IoNewspaperOutline /> },
    { title: "Refer and Earn", icon: <BsGift /> },
    { title: "Integrations", icon: <GrAppsRounded /> },
    { title: "Report Bug", icon: <MdOutlineBugReport /> },
    { title: "Switch Account", icon: <AiOutlineUserSwitch /> },
    { title: "Sign Out", icon: <IoIosLogOut /> },
  ];

  return (
    <div
      style={{
        top,
        right: `1%`,
      }}
      ref={elRef}
      className={`fixed z-999 bg-white items-center gap-4 flex flex-col shadow-md min-w-80 max-w-80 p-2.5 rounded-[15px] `}
    >
      <div className=" w-full flex items-center gap-1.5">
        <div className="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] flex items-center justify-center rounded-full text-sm  text-white bg-[linear-gradient(138.98deg,#5C6670_2.33%,#131316_96.28%)] ">
          OJ
        </div>

        <div className="flex flex-col leading-5">
          <p className="font-bold">Olivier Jones</p>
          <p className="text-sm">olivierjones@gmail.com</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 ">
        {itemsArray.map((item) => (
          <button
            key={item.title}
            className="w-full text-sm flex items-center gap-4 "
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePopOver;
