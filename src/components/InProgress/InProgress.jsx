import React from "react";
import { toast } from "react-toastify";

const InProgress = ({
  progressData,
  inProgress,
  setInProgress,
  setResolve,
  resolve,
  data,
  setData,
}) => {
  const handleCompleteBtn = () => {
    inProgress.filter((cardData) => {
      if (cardData.id === progressData.id) {
        setResolve([progressData, ...resolve]);
      }
    });
    const newInProgress = inProgress.filter(
      (details) => details.id != progressData.id
    );
    setInProgress(newInProgress);
    const newData = data.filter((cardData) => cardData.id != progressData.id);
    setData(newData);
    toast("Resolved !!!");
  };
  return (
    <div className="flex flex-col gap-3 bg-white rounded-md p-3 shadow-md mb-2">
      <h2 className="font-semibold text-black">{progressData.title}</h2>
      <button
        onClick={handleCompleteBtn}
        className="bg-green-500 py-1 text-white rounded-md font-bold cursor-pointer hover:bg-lime-400"
      >
        Complete
      </button>
    </div>
  );
};

export default InProgress;
