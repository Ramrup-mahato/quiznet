import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Capitalized } from "../../utils/Helper";

const Status = ({ selector, title, state, handleSelectOption }) => {
  const [menu, setMenu] = useState(false);
  const handleSelect = () => {
    setMenu(!menu);
  };
  // select Status 
  const handleSelectStatus=(ele)=>{
    handleSelectOption(ele)
    setMenu(!menu);

  }
  return (
    <div className="w-full flex justify-between items-center p-4 rounded-full shadow bg-white dark:bg-slate-700">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex items-center justify-center relative ">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={handleSelect}
        >
          <p>{Capitalized(state)}</p>

          {menu == true ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </div>
        {menu == true && (
          <div className="absolute top-8 bg-[var(--colW2)] dark:bg-slate-700  shadow-2xl flex-col gap-1 rounded w-[100px]">
            {selector.map((ele, i) => (
              <div
                key={i}
                className={` p-1 m-1 rounded-sm hover:bg-gray-200 dark:hover:bg-slate-500 hover:text-gray-900 dark:hover:text-white cursor-pointer ${
                  state == ele ? "bg-[var(--colB1)] text-white " : ""
                }`}
                onClick={()=>handleSelectStatus(ele)}
              >
                <p>{Capitalized(ele)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
