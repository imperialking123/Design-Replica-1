import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import "./style.css";
import FilterUIContainer from "./filter-component/FilterUIContainer";
import generalStore from "../../store/generalStore";

const DashBoardContainer = () => {
  const [Balance] = useState("120,500.00");
  const [currency] = useState("USD");

  const svg = (
    <svg
      className="w-full"
      width="766"
      height="177"
      viewBox="0 0 766 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 176.372L166.416 20.708C211.248 -21.3543 284.962 6.16208 292.371 67.1892C292.787 70.6204 293.481 74.0405 294.439 77.3616C307.665 123.211 364.25 139.497 399.826 107.695L479.94 36.0769C537.595 -15.4631 626.975 -6.77577 673.626 54.9023L765.5 176.372"
        stroke="#FF5403"
        stroke-linecap="round"
      />
    </svg>
  );

  const balanceArray = [
    { text: "Ledger Balance", value: "0.00", currency: "USD" },
    { text: "Total Payout", value: "55,0808.00", currency: "USD" },
    { text: "Total Revenue", value: "175,580.00", currency: "USD" },
    { text: "Pending Payout", value: "0.00", currency: "USD" },
  ];

  const [transactionHistoryArray, setTransactionHistoryArray] = useState([
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: true,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: true,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: true,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: false,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: true,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: false,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
    {
      item: "Psychology of Money and 2 other projects",
      amount: 600,
      currency: "USD",
      incoming: true,
      from: "Dominic Dan",
      timestamp: "Apr 03,2022",
      status: "Successful",
    },
  ]);

  return (
    <div className="min-h-[87%] max-h-[87.3%] overflow-y-auto pt-10  z-10 gap-7 flex-col flex select-none pb-10 pl-20 pr-20 min-w-full ">
      <div className="w-full flex gap-25 ">
        <div className="flex flex-col w-[70%] relative ">
          <p className="text-xs text-gray-600">Avaliable Balance</p>
          <p className="text-3xl font-bold">
            {currency} {Balance}{" "}
          </p>

          <div className="flex mt-10 flex-col items-center gap-1 ">
            {svg}
            <div className="w-full flex gap-2 items-center flex-col">
              <div className="graphLine"></div>
              <div className="flex justify-between w-[98%] text-sm opacity-90 ">
                <p>Apr 1, 2022</p>
                <p>Apr 30, 2022</p>
              </div>
            </div>
          </div>

          <button className=" left-[37%]  absolute rounded-full w-[120px] h-[45px] bg-black text-white ">
            Withdraw
          </button>
        </div>

        <div className="w-[30%] pl-2 pr-2 flex flex-col gap-7 ">
          {balanceArray.map((balance, index) => (
            <div className="flex flex-col  " key={index}>
              <div className="flex text-sm opacity-85 items-center justify-between">
                <p>{balance.text}</p>{" "}
                <p>
                  <CiCircleInfo />
                </p>
              </div>
              <p className="text-[22px] font-bold">
                {balance.currency} {balance.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 select-none ">
        <div className="flex  w-full justify-between border-b-[#dbdee5] border-b pb-3 border-solid  ">
          <div className="flex flex-col">
            <p className="text-lg font-bold leading-5 ">24 Transactions</p>
            <p className="text-xs opacity-80">
              Your transactions for the last 7 days
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => generalStore.setState({ showFilterUI: true })}
              className="flex gap-1 items-center p-5 rounded-full justify-center h-[30px] bg-[#dbdee5] "
            >
              Filter <IoIosArrowDown />{" "}
            </button>

            <button className="flex gap-1 items-center p-5 rounded-full justify-center h-[30px] mr-10 bg-[#dbdee5] ">
              Export List <MdOutlineFileDownload />
            </button>
          </div>
        </div>

        <div className="w-full gap-5 mt-5 flex flex-col">
          {transactionHistoryArray.map((trnxHistory, index) => {
            return (
              <div key={index} className="flex gap-2 ">
                <div
                  className={`flex text-lg w-10 h-10 rounded-full items-center justify-center ${
                    trnxHistory.incoming ? "bg-green-200" : "bg-red-200"
                  } `}
                >
                  {trnxHistory.incoming ? (
                    <GoArrowDownLeft />
                  ) : (
                    <GoArrowUpRight />
                  )}
                </div>

                <div className="flex flex-col flex-1 ">
                  <div className=" flex justify-between w-full ">
                    <p className="text-sm">{trnxHistory.item}</p>
                    <p className="font-bold">
                      {trnxHistory.currency} {trnxHistory.amount}
                    </p>
                  </div>
                  <div className=" text-xs flex justify-between w-full ">
                    {trnxHistory.incoming ? (
                      <p className="opacity-70">{trnxHistory.from}</p>
                    ) : (
                      <p className="text-green-400">{trnxHistory.status}</p>
                    )}

                    <p className="opacity-70 ">{trnxHistory.timestamp}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoardContainer;
