import React from "react";

const AddTaskForm = () => {
  return (
    <div className="row pt-5 pb-5 ps-4 pe-4 mt-5 mb-5 rounded-pill  shadow-lg">
      <div className="col-sm-12 col-md-6">
        <input
          type="text"
          className="form-control"
          id="task"
          name="task"
          placeholder="ADD TASK"
        />
      </div>
      <div className="col-sm-12 col-md-3 col-lg-2">
        <input
          type="number"
          className="form-control"
          id="hour"
          name="hour"
          placeholder="HOUR"
          value="0"
        />
      </div>
      <div className="col-sm-12 col-md-3 col-lg-2">
        <select className="form-select" name="type" id="type">
          <option value="good">Good</option>
          <option value="bad">Bad</option>
        </select>
      </div>

      <div className="col-sm-12 col-md-2">
        <button
          type="button"
          className="btn btn-primary"
          id="addBtn"
          onclick="addTask()"
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
