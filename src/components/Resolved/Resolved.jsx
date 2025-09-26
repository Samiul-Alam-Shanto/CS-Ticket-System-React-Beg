import React from "react";

const Resolved = ({ info }) => {
  return (
    <div>
      <h2 className="bg-[#E0E7FF] px-5 py-4 font-semibold rounded-md cursor-pointer shadow-md mb-2 text-black">
        {info.title}
      </h2>
    </div>
  );
};

export default Resolved;
