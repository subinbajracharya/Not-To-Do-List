import React from "react";

const TotalHourComponent = ({ totalHour }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="alert alert-info" role="alert">
          Total Hours : <span id="totalHour">{totalHour}</span> hour
        </div>
      </div>
    </div>
  );
};

export default TotalHourComponent;
