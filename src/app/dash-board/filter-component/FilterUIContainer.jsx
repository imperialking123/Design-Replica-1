import { useEffect, useState } from "react";
import generalStore from "../../../store/generalStore";
import { LuX } from "react-icons/lu";
import DateRangerContainer from "./DateRangerContainer";
import TransactionTypeContainer from "./TransactionTypeContainer";
import TransactionStatusContainer from "./TransactionStatusContainer";

const FilterUIContainer = () => {
  const [slideIn, setSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOnTransitionEnd = () => {
    if (!slideIn) {
      generalStore.setState(false);
    }
  };

  const filterPresetArray = [
    { text: "Today" },
    { text: "Last 7 days" },
    { text: "This month" },
    { text: "Last 3 Months" },
  ];

  return (
    <div
      id="filter-ui"
      onTransitionEnd={handleOnTransitionEnd}
      onClick={() => setSlide(false)}
      className={`min-w-full select-none min-h-screen fixed z-40 transition duration-500 ease-in-out ${
        slideIn ? "bg-[#d8d8d8ce]" : "bg-transparent"
      } `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        flex justify-between transition duration-700 ease-in-out shadow-md rounded-2xl 
        absolute 
        top-1/2 -translate-y-1/2 right-0   
        ${slideIn ? "-translate-x-4" : "translate-x-full"} 
        min-w-[30%] max-w-[30%] min-h-[95%] max-h-[95%] bg-white p-2.5 flex-col
      `}
      >
        <div className="flex flex-col w-full pt-1.5">
          <div className="flex select-none items-center justify-between">
            <p className="font-bold text-lg">Filter</p>
            <button
              onClick={() => setSlide(false)}
              className="w-[30px] h-[30px] flex items-center justify-center "
            >
              <LuX />
            </button>
          </div>

          <div className="flex mt-2 w-full gap-1 justify-evenly ">
            {filterPresetArray.map((preset, index) => (
              <button
                className="h-[30px] p-2.5 flex items-center justify-center rounded-2xl text-xs border-[#dbdee5] border border-solid "
                key={index}
              >
                {preset.text}
              </button>
            ))}
          </div>

          <div className="flex mt-3 flex-col w-full">
            <DateRangerContainer />
          </div>

          <div className="flex mt-3 flex-col w-full">
            <TransactionTypeContainer />
          </div>

          <div className="flex mt-3 flex-col w-full">
            <TransactionStatusContainer />
          </div>
        </div>

        <div className="w-full flex   gap-2 ">
          <button className="w-full h-10  border-[#dbdee5] border rounded-full border-solid ">
            Clear
          </button>

          <button
            disabled
            className="w-full disabled:opacity-70 h-10  rounded-full bg-black text-white "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterUIContainer;
