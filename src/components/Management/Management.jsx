import React, { use, useState } from "react";

import CountBox from "../CountBox/CountBox";
import TaskStatus from "../TaskStatus/TaskStatus";

const Management = ({ dataPromise }) => {
  const dataLoad = use(dataPromise);
  const [data, setData] = useState(dataLoad);

  const [inProgress, setInProgress] = useState([]);
  const [resolve, setResolve] = useState([]);

  return (
    <div className="bg-[#F5F5F5]">
      <CountBox resolve={resolve} inProgress={inProgress} />
      <TaskStatus
        resolve={resolve}
        setResolve={setResolve}
        inProgress={inProgress}
        setInProgress={setInProgress}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Management;
