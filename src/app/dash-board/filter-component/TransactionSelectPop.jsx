import { useEffect, useRef } from "react";
import { IoMdCheckmark } from "react-icons/io";

const TransactionSelectPop = ({
  parentDomRect,
  setParentDomRect,
  SelectListArray,
  setSelectListArray,
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const eventHandler = (event) => {
      if (elRef.current && !elRef.current.contains(event.target)) {
        setParentDomRect(null);
      }
    };

    const parentUI = document.getElementById("filter-ui");

    parentUI.addEventListener("click", eventHandler);

    return () => {
      parentUI.removeEventListener("click", eventHandler);
    };
  }, []);
  const offSet = SelectListArray.length > 4 ? 0 : 70;

  const top = `${parentDomRect.bottom + offSet}px`;

  const handleUpdateCheckBox = (uniqueId) => {
    const updatedArray = SelectListArray.map((item) => {
      if (item.id === uniqueId) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else {
        return item;
      }
    });

    setSelectListArray(updatedArray);
  };
  return (
    <div
      style={{
        top,
      }}
      ref={elRef}
      className="w-[98%] absolute rounded-lg p-2.5 flex flex-col gap-1.5
 shadow-md bg-white "
    >
      {SelectListArray.map((item) => (
        <div
          onClick={() => handleUpdateCheckBox(item.id)}
          className="w-full items-center flex gap-2.5 p-2 rounded-lg hover:bg-[#dbdee5]"
          key={item.id}
        >
          <div className="min-h-3.5 relative min-w-3.5 max-w-3.5 max-h-3.5 border border-gray-100  p-1">
            {item.isChecked && (
              <div className="w-full h-full absolute inset-0 bg-black text-xs flex items-center justify-center text-white ">
                <IoMdCheckmark />
              </div>
            )}
          </div>

          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionSelectPop;
