import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import TransactionSelectPop from "./TransactionSelectPop";

const TransactionStatusContainer = () => {
  const [elementDomRect, setElementDomRect] = useState(null);

  const [transactionStatus, setTransactionStatus] = useState(
    "Successfull, Pending, Failed"
  );

  const genUniqueId = () => {
    return crypto.randomUUID().split("-")[0];
  };

  const [transactionStatusArray, setTransactionStatusArray] = useState([
    { name: "Successful", isChecked: true, id: genUniqueId() },
    { name: "Pending", isChecked: true, id: genUniqueId() },
    { name: "Failed", isChecked: true, id: genUniqueId() },
  ]);

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
      <p className="font-semibold ml-1 self-start ">Transaction Status </p>

      <div
        className={`w-full flex items-center  justify-between p-2.5 h-10 rounded-full bg-[#dbdee5]  ${
          elementDomRect ? "outline-2" : ""
        }  `}
      >
        <p> {transactionStatus}</p>
        <IoChevronDown
          className={`transition duration-500 ease-in-out ${
            elementDomRect && "rotate-180"
          } `}
        />
      </div>

      {elementDomRect && (
        <TransactionSelectPop
          setSelectListArray={setTransactionStatusArray}
          SelectListArray={transactionStatusArray}
          parentDomRect={elementDomRect}
          setParentDomRect={setElementDomRect}
        />
      )}
    </div>
  );
};

export default TransactionStatusContainer;
