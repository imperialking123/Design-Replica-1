import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import TransactionSelectPop from "./TransactionSelectPop";

const TransactionTypeContainer = () => {
  const [TransactionType, setTransactionType] = useState("Store Transaction");

  const genUniqueId = () => {
    return crypto.randomUUID().split("-")[0];
  };

  const [transactionTypeArray, setTransactionTypeArray] = useState([
    { name: "Store Transaction", isChecked: true, id: genUniqueId() },
    { name: "Get Tipped", isChecked: true, id: genUniqueId() },
    { name: "Withdrawals", isChecked: true, id: genUniqueId() },
    { name: "ChargeBacks", isChecked: true, id: genUniqueId() },
    { name: "Cashbacks", isChecked: true, id: genUniqueId() },
    { name: "Refer and Earn", isChecked: true, id: genUniqueId() },
  ]);

  const [elementDomRect, setElementDomRect] = useState(null);

  const handleOnclick = () => {
    const elDomRect = document
      .getElementById("transactionType")
      .getBoundingClientRect();

    setElementDomRect(elDomRect);
  };

  return (
    <div
      id="transactionType"
      onClick={handleOnclick}
      className={`flex items-center flex-col gap-1 w-full `}
    >
      <p className="font-semibold ml-1 self-start ">Transaction Type </p>

      <div
        className={`w-full flex items-center  justify-between p-2.5 h-10 rounded-full bg-[#dbdee5]  ${
          elementDomRect ? "outline-2" : ""
        }  `}
      >
        <p> {TransactionType}</p>
        <IoChevronDown
          className={`transition duration-500 ease-in-out ${
            elementDomRect && "rotate-180"
          } `}
        />
      </div>

      {elementDomRect && (
        <TransactionSelectPop
          setSelectListArray={setTransactionTypeArray}
          SelectListArray={transactionTypeArray}
          parentDomRect={elementDomRect}
          setParentDomRect={setElementDomRect}
        />
      )}
    </div>
  );
};

export default TransactionTypeContainer;
