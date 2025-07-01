import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ListComponent from "./components/ListComponent";
import TotalHourComponent from "./components/TotalHourComponent";

function App() {
  const [totalHour, setTotalHour] = useState(0);
  const [goodHour, setGoodHour] = useState(0);
  const [badhour, setBadHour] = useState(0);

  const [tasks, setTasks] = useState([]);

  const calculateTotalHours = (tempTaskList) => {
    let totalHour = tempTaskList.reduce(
      (acc, item) => parseInt(item.hour) + acc,
      0
    );

    let badHour = tempTaskList.reduce((acc, item) => {
      return acc + (item.type == "bad" ? parseInt(item.hour) : 0);
    }, 0);

    let goodHour = tempTaskList.reduce((acc, item) => {
      return acc + (item.type == "good" ? parseInt(item.hour) : 0);
    }, 0);

    setTotalHour(totalHour);
    setBadHour(badHour);
    setGoodHour(goodHour);
  };

  useEffect(() => {
    calculateTotalHours(tasks);
  }, []);

  const handleOnDelete = (id) => {
    let updatedTasks = tasks.filter((item) => item.id != id);
    setTasks(updatedTasks);
    calculateTotalHours(updatedTasks);
  };

  const handleOnSwap = async (id) => {
    let updatedTasks = [...tasks];
    let taskObj = updatedTasks.find((item) => item.id == id);

    taskObj.type = taskObj.type == "good" ? "bad" : "good";

    setTasks(updatedTasks);
    calculateTotalHours(updatedTasks);
  };

  const handleOnAdd = (taskObj) => {
    // get old task lists
    let newTaskList = [...tasks];

    // update old task lists and generate new task lists
    newTaskList.push(taskObj);

    // update the tasks
    setTasks(newTaskList);
    calculateTotalHours(newTaskList);
  };

  return (
    <>
      <div className="wrapper text-white">
        <div className="container text-center">
          {/* Header */}
          <Header title="Not To Do List" />

          {/* Add Task Form */}
          <AddTaskForm tasks={tasks} handleOnAdd={handleOnAdd} />

          {/* Task List */}
          <ListComponent
            tasks={tasks}
            handleOnDelete={handleOnDelete}
            handleOnSwap={handleOnSwap}
            goodHour={goodHour}
            badHour={badhour}
          />

          {/* Total Hours */}
          <TotalHourComponent totalHour={totalHour} />
        </div>
      </div>
    </>
  );
}

export default App;
