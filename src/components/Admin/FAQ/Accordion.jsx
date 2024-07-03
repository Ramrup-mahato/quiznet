import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
// import "./Accordion.css"; // import CSS for animations
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FcIdea } from "react-icons/fc";

const Accordion = ({ title, content, id, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[var(--colW2)] dark:bg-slate-800 rounded-tr-3xl  rounded-bl-3xl rounded-md">
      <div
        className={`w-full cursor-pointer flex items-center justify-between  p-3 text-[14px]  rounded-tr-3xl rounded-md ${
          note ? "bg-slate-200 dark:bg-gray-700" : "bg-[var(--colB5)]"
        }`}
        onClick={toggleAccordion}
      >
        {note ? (
          <div className=" font-semibold flex gap-1 justify-center items-center "> {title} <FcIdea size={20} /></div>
        ) : (
          <div className=" font-semibold ">
            Q{id}. {title}
          </div>
        )}

        {isOpen ? (
          <MdKeyboardArrowUp size={25} />
        ) : (
          <MdKeyboardArrowDown size={25} />
        )}
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="accordion-content"
        unmountOnExit
      >
        <div
          className={`p-3 bg-[var(--colW2)] dark:bg-slate-800 accordion-content rounded-bl-3xl `}
        >
          <div className="text-[13px] text-slate-600 dark:text-slate-300">
            {content}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Accordion;
