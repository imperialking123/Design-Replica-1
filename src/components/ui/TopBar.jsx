import { useEffect, useState } from "react";
import { FaMoneyBills } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrAppsRounded } from "react-icons/gr";
import {
  MdKeyboardArrowDown,
  MdOutlineAnalytics,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import AppsPopOver from "./AppsPopOver";
import { LuMessageSquareText } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfilePopOver from "./ProfilePopOver";

const centerButtonArray = [
  { text: "Home", icon: <GoHome />, value: "home", id: "topBarHome" },
  {
    text: "Analytics",
    icon: <MdOutlineAnalytics />,
    value: "analytics",
    id: "topBarAnalytics",
  },
  {
    text: "Revenue",
    icon: <FaMoneyBills />,
    value: "revenue",
    id: "topBarRevenue",
  },
  { text: "CRM", icon: <MdOutlinePeopleAlt />, value: "crm", id: "topBarCRM" },
  { text: "Apps", icon: <GrAppsRounded />, value: "apps", id: "topBarApps" },
];

const TopBar = () => {
  const [selectedButton, setSelectedButton] = useState("revenue");
  const [selectedApp, setSelectedApp] = useState("Link in Bio");

  const [showProfilePop, setShowProfilePop] = useState(false);

  const handleCenterButtonOnclick = (value) => {
    setSelectedButton(value);
  };

  const handleShowPopTriggerClick = () => {
    setShowProfilePop(!showProfilePop);
  };

  return (
    <div
      id="idman"
      className="select-none  z-40 bg-white fixed transition duration-500 ease-in-out flex justify-between top-[8%] items-center  left-[50%] p-2.5 shadow-md  translate-[-50%] min-w-[90%] rounded-full  "
    >
      <img src="/logo.svg" className="w-[36px] select-none pointer-none:" />

      <div className="flex  gap-2.5 items-center">
        {centerButtonArray.map((btn) => {
          const isSelected = selectedButton === btn.value;

          const isApp = isSelected && selectedButton === "apps";

          return (
            <button
              onClick={() => handleCenterButtonOnclick(btn.value)}
              className={`flex select-none text-[15px] relative overflow-hidden transition duration-500 ease-in-out h-10   gap-[5px] p-[5px] pl-[15px] pr-[15px] rounded-full items-center  ${
                isSelected ? "bg-black text-white " : "hover:bg-gray-300  "
              } `}
              value={btn.value}
              key={btn.value}
              id={btn.id}
            >
              {btn.icon} {btn.text}{" "}
              {isApp && (
                <div className=" flex ml-[5px] items-center ">
                  <div className="w-px absolute text-white bg-gray-200 h-full " />

                  <p className="ml-[5px]">{selectedApp}</p>
                  <MdKeyboardArrowDown />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="topBarProfile"
        className="flex pl-2 pr-2 min-w-[120px] justify-center min-h-10 gap-2  items-center "
      >
        <div className="min-h-[30px] min-w-[30px] flex items-center justify-center ">
          <IoIosNotificationsOutline />
        </div>
        <div className="min-h-[30px]  min-w-[30px] flex items-center justify-center ">
          <LuMessageSquareText />
        </div>

        <div
          onClick={handleShowPopTriggerClick}
          className="flex bg-[#EFF1F6] min-h-[35px] max-h-[35px] items-center p-1.5 rounded-2xl gap-1.5 "
        >
          <div className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] flex items-center justify-center rounded-full text-sm  text-white bg-[linear-gradient(138.98deg,#5C6670_2.33%,#131316_96.28%)] ">
            OJ
          </div>
          <div className="min-h-[25px] min-w-[25px] text-lg flex items-center justify-center ">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>

      {selectedButton === "apps" && (
        <AppsPopOver
          setSelectedApp={setSelectedApp}
          setSelectedButton={setSelectedButton}
        />
      )}

      {showProfilePop && (
        <ProfilePopOver setShowProfilePop={setShowProfilePop} />
      )}
    </div>
  );
};

export default TopBar;
