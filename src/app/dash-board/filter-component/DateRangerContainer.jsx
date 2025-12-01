import { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import DatePicker from "./DatePicker";

const DateRangerContainer = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedFromDate = `${fromDate.getDate()} ${
    months[fromDate.getMonth()]
  } ${fromDate.getFullYear()} `;

  const formattedToDate = `${toDate.getDate()} ${
    months[toDate.getMonth()]
  } ${toDate.getFullYear()} `;

  const [datePickerBoundingRect, setDatePickerBoundingRect] = useState(null);
  const [datePickerFunction, setDatePickerFunction] = useState("");

  const handleShowDatePicker = async (id, functionName) => {
    const elDomRect = await document
      .getElementById(id)
      ?.getBoundingClientRect();
    setDatePickerBoundingRect(elDomRect);
    setDatePickerFunction(functionName);
  };

  return (
    <div className="flex flex-col gap-1 w-full ">
      <p className="font-semibold ml-1 ">Data Range</p>
      <div className="flex gap-2.5">
        <div
          onClick={() => handleShowDatePicker("filter-ui-fromDate", "from")}
          id="filter-ui-fromDate"
          className={` ${
            datePickerFunction === "from" ? "outline-2" : ""
          } h-10 rounded-2xl p-2.5 justify-between bg-[#dbdee5] flex items-center w-full`}
        >
          {formattedFromDate}{" "}
          <IoChevronDown
            className={`transition duration-500 ease-in-out  ${
              datePickerBoundingRect &&
              datePickerFunction === "from" &&
              "rotate-180"
            } `}
          />
        </div>

        <div
          onClick={() => handleShowDatePicker("filter-ui-toDate", "to")}
          id="filter-ui-toDate"
          className={` ${
            datePickerFunction === "to" ? "outline-2" : ""
          } h-10 rounded-2xl p-2.5 justify-between bg-[#dbdee5] flex items-center w-full`}
        >
          {formattedToDate}{" "}
          <IoChevronDown
            className={`transition duration-500 ease-in-out  ${
              datePickerBoundingRect &&
              datePickerFunction === "to" &&
              "rotate-180"
            } `}
          />
        </div>
      </div>

      {datePickerBoundingRect && (
        <DatePicker
          DomRect={datePickerBoundingRect}
          UpdateDateFunction={
            datePickerFunction === "from" ? setFromDate : setToDate
          }
          parentDate={datePickerFunction === "from" ? fromDate : toDate}
          setUpdateFunction={setDatePickerFunction}
          setDomRect={setDatePickerBoundingRect}
        />
      )}
    </div>
  );
};

export default DateRangerContainer;
