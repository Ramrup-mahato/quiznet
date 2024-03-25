import React from "react";

const QuizBox = ({ question, handleSelectAnswer }) => {
  // console.log("============",question);
  return (
    <div className=" sm:p-5">
      <p className="p-2 no-select ">Q. {question?.question}</p>
      <div className="sm:pl-10">
        {question?.option?.map((ans, i) => (
          <div
            key={i}
            className={` m-1 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full 
            ${question?.yourAnswer == ans?.name ? "yourAnswer" : null} `}
          >
            <div className="w-[20px] h-[20px]  px-2 ">
              <input
                type="radio"
                name={ans?.name}
                id={`${ans?.name}${i}`}
                className="w-[20px] h-[20px] "
                checked={question?.yourAnswer == ans?.name ? true : false}
                onChange={() =>
                  handleSelectAnswer(question?.question, ans?.name)
                }
              />
            </div>
            <label
              htmlFor={`${ans?.name}${i}`}
              className="text-[14px] no-select w-full px-2 py-1 sm:py-2 cursor-pointer "
            >
              {ans?.que}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizBox;
