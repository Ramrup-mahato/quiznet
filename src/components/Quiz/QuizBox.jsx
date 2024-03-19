import React from "react";

const QuizBox = ({question}) => {
  console.log("============",question);
  return (
    <div className=" sm:p-5">
      <p className="p-2 no-select ">Q. {question?.question}</p>
      <div className="sm:pl-10">
        {question?.option?.map((ans, i) => (
          <div
            key={i}
            className="cursor-pointer px-2 py-1 sm:py-2 m-1 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full "
          >
            <div className="w-[20px] h-[20px] ">
              <input
                type="radio"
                name={ans?.name}
                id={`${ans?.name}${i}`}
                className="w-[20px] h-[20px] "
              />
            </div>
            <label htmlFor={`${ans?.name}${i}`} className="text-[14px] no-select ">
              {ans?.que}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizBox;
