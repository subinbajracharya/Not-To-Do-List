import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { LuArrowLeftRight, LuArrowRightLeft } from "react-icons/lu";

const TaskList = ({
  title,
  type,
  tasks,
  handleOnDelete,
  handleOnSwap,
  hour,
}) => {
  return (
    <div className="col-12 col-md-6">
      <div className="card p-3 h-100">
        <h2>{title}</h2>
        <hr />
        <div className="card-body p-0">
          <table className="table">
            <tbody id="goodList">
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-3">
                    There are no tasks in the list.
                  </td>
                </tr>
              ) : (
                tasks.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.task}</td>
                      <td>{item.hour} Hrs</td>
                      <td>
                        {item.type == "good" ? (
                          <>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleOnDelete(item.id)}
                            >
                              <RiDeleteBin2Fill />
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => handleOnSwap(item.id)}
                            >
                              <LuArrowRightLeft />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => handleOnSwap(item.id)}
                            >
                              <LuArrowLeftRight />
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-danger"
                              // onclick="deleteTask('Z5zFfV')"
                              onClick={() => handleOnDelete(item.id)}
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        {type == "good" ? (
          <div className="alert alert-info" role="alert">
            You saved {hour} hours
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            You wasted {hour} hours
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
