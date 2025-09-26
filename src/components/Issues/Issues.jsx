import React, { useState } from "react";
import calender from "../../assets/calendar-line.png";
import { toast } from "react-toastify";

const Issues = ({ issue, inProgress, setInProgress }) => {
  const [text, setText] = useState(issue.status);

  const handleCardClick = () => {
    toast("In Progress !!!");

    const cardData = [...inProgress, issue];
    setInProgress(cardData);
    setText("In Progress");
  };

  return (
    <div
      onClick={() => handleCardClick()}
      className="flex flex-col p-6 gap-3 bg-white rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer shadow "
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-wrap xl:text-nowrap text-black">
          {issue.title}
        </h3>
        <span
          className={`rounded-2xl ${
            text == "In Progress"
              ? "text-amber-800 bg-amber-200"
              : "text-green-800 bg-green-200"
          } px-2 text-nowrap`}
        >
          &#9670; {text}
        </span>
      </div>
      <div>
        <p className="text-gray-600 line-clamp-2">{issue.description}</p>
      </div>
      <div className="flex text-[12px] text-gray-600 justify-between items-center">
        <div className="flex justify-between gap-2">
          <span>#{issue.id}</span>
          <p
            className={
              issue.priority === "HIGH PRIORITY"
                ? "text-red-700"
                : issue.priority === "MEDIUM PRIORITY"
                ? "text-amber-500"
                : issue.priority === "LOW PRIORITY"
                ? "text-green-600"
                : ""
            }
          >
            {issue.priority}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="mr-3">{issue.customer}</p>
          <img src={calender} alt="" />
          <span className="ml-1">{issue.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Issues;
