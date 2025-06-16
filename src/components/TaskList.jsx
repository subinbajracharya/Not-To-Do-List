import React from "react";

const TaskList = (props) => {
  return (
    <>
      <div className="col-sm-12 col-md-6">
        <h2>{props.title}</h2>
        <hr />
        <table className="table">
          <tbody id="goodList"></tbody>
        </table>
      </div>
      <div className="col-sm-12 col-md-6">
        <h2>{props.title}</h2>
        <hr />
        <table className="table">
          <tbody id="badList"></tbody>
        </table>

        <div className="alert alert-danger" role="alert">
          You wasted <span id="badHour"></span> hour
        </div>
      </div>
    </>
  );
};

export default TaskList;
