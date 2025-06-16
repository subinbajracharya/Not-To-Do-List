import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ListComponent from "./components/ListComponent";
import TotalHourComponent from "./components/TotalHourComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          {/* Header */}
          <Header title="Not To Do List" />

          <AddTaskForm />

          <ListComponent />

          <TotalHourComponent />
        </div>
      </div>
    </>
  );
}

export default App;
