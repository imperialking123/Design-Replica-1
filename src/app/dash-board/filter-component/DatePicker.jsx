import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const DatePicker = ({
  DomRect,
  UpdateDateFunction,
  setDomRect,
  setUpdateFunction,
  parentDate,
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const eventHandler = (event) => {
      if (elRef.current && !elRef.current.contains(event.target)) {
        setUpdateFunction("");
        setDomRect(null);
      }
    };

    const parentUI = document.getElementById("filter-ui");

    parentUI.addEventListener("click", eventHandler);

    return () => {
      parentUI.removeEventListener("click", eventHandler);
    };
  }, []);

  const offSet = 35;

  const top = `${DomRect.top + offSet}px`;

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [dateState, setDateState] = useState(new Date(parentDate));

  const currentMonth = dateState?.getMonth();
  const currentYear = dateState.getFullYear();
  const currentDate = dateState.getDate();
  const topDateSummary = `${monthsArray[currentMonth]},${currentYear}`;

  const handleChangeMonth = (negative) => {
    if (!dateState) return;

    const newDate = new Date(dateState);
    const currentMonth = newDate.getMonth();

    if (negative === false) {
      newDate.setMonth(currentMonth + 1);
    } else {
      newDate.setMonth(currentMonth - 1);
    }

    setDateState(newDate);
  };

  const handleDaysReturn = () => {
    const firstDayofTheMonth = new Date(currentYear, currentMonth, 1);
    const firstDayIndex = firstDayofTheMonth.getDay();

    const placeHolderArray = Array(firstDayIndex).fill(" ");

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const fullDaysForMapping = [...placeHolderArray, ...daysArray];

    return fullDaysForMapping;
  };

  if (!DomRect) return null;
  return (
    <div
      style={{ top }}
      ref={elRef}
      className="absolute  flex flex-col min-w-[95%] max-w-[95%] gap-2.5 bg-white z-10 shadow-lg min-h-[200px]  rounded-2xl p-2.5 "
    >
      <div className="flex w-full items-center justify-between">
        <div
          onClick={() => handleChangeMonth(true)}
          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#dbdee5]"
        >
          <BiChevronLeft />
        </div>

        <p>{topDateSummary}</p>

        <div
          onClick={() => handleChangeMonth(false)}
          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#dbdee5] "
        >
          <BiChevronRight />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 ">
        <div className="grid  w-full grid-cols-7 gap-1">
          {daysArray.map((day) => (
            <div
              className="flex items-center justify-center  text-xs opacity-75"
              key={day}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid  w-full grid-cols-7 gap-1">
          {handleDaysReturn().map((day, index) => {
            return (
              <div
                className="flex  items-center justify-center  text-xs "
                key={index}
              >
                {day === " " ? (
                  " "
                ) : (
                  <div
                    className={`w-5 h-5 ${
                      currentDate === day
                        ? "bg-black text-white"
                        : "hover:bg-[#dbdee5]"
                    } items-center rounded-full justify-center flex`}
                  >
                    {day}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
