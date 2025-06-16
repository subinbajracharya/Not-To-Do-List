import React from "react";
import TaskList from "./TaskList";

const ListComponent = () => {
  return (
    <div className="row">
      {/* Good List */}
      <TaskList title="Good List" />

      {/* Bad List */}
      <TaskList title="Bad List" />
    </div>
  );
};

export default ListComponent;
