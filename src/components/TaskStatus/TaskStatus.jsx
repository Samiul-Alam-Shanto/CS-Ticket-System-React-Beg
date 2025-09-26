import React from "react";
import Container from "../ContainerClass/Container";
import Issues from "../Issues/Issues";
import InProgress from "../InProgress/InProgress";
import Resolved from "../Resolved/Resolved";

const TaskStatus = ({
  data,
  setData,
  setInProgress,
  inProgress,
  resolve,
  setResolve,
}) => {
  return (
    <Container>
      <div className="px-2 grid grid-cols-12 gap-5  pb-6">
        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-bold text-2xl mb-4 text-black">
            Customer Tickets
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {data.map((issue) => (
              <Issues
                inProgress={inProgress}
                setInProgress={setInProgress}
                key={issue.id}
                issue={issue}
              ></Issues>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 ">
          <div className="mb-4">
            <h2 className="font-bold text-2xl mb-4 text-black">Task Status</h2>

            {inProgress.length == 0 ? (
              <p className="text-gray-500">
                Select a ticket to add to Task Status
              </p>
            ) : (
              inProgress
                // .filter((clickData) => clickData.status != "In Progress")
                .map((progressData, ind) => (
                  <InProgress
                    setData={setData}
                    data={data}
                    resolve={resolve}
                    setResolve={setResolve}
                    inProgress={inProgress}
                    setInProgress={setInProgress}
                    key={ind}
                    progressData={progressData}
                  />
                ))
            )}
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-4 text-black">
              Resolved Task
            </h2>

            {resolve.length == 0 ? (
              <p className="text-gray-500">No resolved tasks yet.</p>
            ) : (
              resolve.map((info) => <Resolved key={info.id} info={info} />)
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TaskStatus;
