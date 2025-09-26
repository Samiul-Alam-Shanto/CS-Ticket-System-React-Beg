import React from "react";
import bg1 from "../../assets/vector1.png";
import bg2 from "../../assets/Group1.png";
import Container from "../ContainerClass/Container";

const CountBox = ({ inProgress, resolve }) => {
  return (
    <Container>
      <div className="px-2  py-8 flex flex-col md:flex-row gap-5 ">
        <div
          className=" bg-no-repeat bg-contain  flex-1 py-20 rounded-xl shadow flex justify-center items-center flex-col text-white  transform transition duration-300  hover:-translate-y-3 hover:shadow-2xl"
          style={{
            backgroundImage: `  url(${bg1}), url(${bg2}), linear-gradient(to right, #632EE3, #9F62F2)`,
            backgroundPosition: "left,right",
          }}
        >
          <h2 className="text-2xl">In Progress</h2>
          <p className="font-bold text-4xl">{inProgress.length}</p>
        </div>
        <div
          className=" bg-no-repeat bg-contain flex-1 py-20 rounded-xl shadow flex justify-center items-center flex-col text-white  transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
          style={{
            backgroundImage: `  url(${bg1}), url(${bg2}), linear-gradient(to right, #632EE3, #9F62F2)`,
            backgroundPosition: "left,right",
          }}
        >
          <h2 className="text-2xl">Resolved</h2>
          <p className="font-bold text-4xl">{resolve.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
