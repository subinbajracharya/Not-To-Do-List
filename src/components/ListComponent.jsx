import React from "react";
import TaskList from "./TaskList";

const ListComponent = ({
  tasks,
  handleOnDelete,
  handleOnSwap,
  goodHour,
  badHour,
}) => {
  // good list
  let goodTasks = tasks.filter((item) => item.type == "good");

  // bad list
  let badTasks = tasks.filter((item) => item.type == "bad");

  return (
    <div className="row mb-5">
      {/* Good List */}
      <TaskList
        title="Good List"
        tasks={goodTasks}
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
        type="good"
        hour={goodHour}
      />

      {/* Bad List */}
      <TaskList
        title="Bad List"
        tasks={badTasks}
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
        type="bad"
        hour={badHour}
      />
    </div>
  );
};

export default ListComponent;
