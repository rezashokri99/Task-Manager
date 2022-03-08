import React, { useReducer, useState } from "react";
import styles from "./MainContainer.module.css";
import SearchInput from "./searchInput/SearchInput";
import { IoNotificationsOutline } from "react-icons/io5";
import UserInfo from "./userInfo/UserInfo";
import TaskManager from "./TaskManager";
import AddTodo from "./AddTodo";
import { Navigate, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Notify from "./Notify";
// import Notify from "./Notify";

const Main = () => {

  // const notify = () => toast("Wow so easy!");

  const initialState = JSON.parse(localStorage.getItem("taskData")) ? JSON.parse(localStorage.getItem("taskData")) : [];

  const reducerData = (state, action) => {
    switch (action.type) {
      case "ADD":{
        let tasks = JSON.parse(localStorage.getItem("taskData"));
        return tasks;
      }
      case "EDIT":{
        localStorage.setItem("editTask", JSON.stringify(state.find((task) => task.id === action.id && task)));
        return state;
      }
      
      case "AFTEREDIT" : {
        let tasksLS = JSON.parse(localStorage.getItem("taskData"));
        return tasksLS;
      }

        
      case "DELETE":
        const tasks = [...state];
        const indexTask = tasks.findIndex((task) => task.id === action.id);

        tasks.splice(indexTask, 1);
        tasks.map((task, index) => task.id = index);
    
        localStorage.setItem("taskData", JSON.stringify(tasks));
        return tasks;

      case "ADDTOINPROGRESS" :{
        const tasks = [...state];
        const indexTask = tasks.findIndex((task) => task.id === action.id);
        const task = tasks.find((task) => task.id === action.id);
        
        task.status = "inProgress";
        tasks[indexTask] = task;

        localStorage.setItem("taskData", JSON.stringify(tasks));
        return tasks;
      }

      case "ADDTOINCOMPLETED" : {
        const tasks = [...state];
        const indexTask = tasks.findIndex((task) => task.id === action.id);
        const task = tasks.find((task) => task.id === action.id);
        
        task.status = "completed";
        tasks[indexTask] = task;

        localStorage.setItem("taskData", JSON.stringify(tasks));
        return tasks;
      }

      case "ADDTOTodoList":{
        const tasks = [...state];
        const indexTask = tasks.findIndex((task) => task.id === action.id);
        const task = tasks.find((task) => task.id === action.id);
        
        task.status = "todo";
        tasks[indexTask] = task;

        localStorage.setItem("taskData", JSON.stringify(tasks));
        return tasks;
      }
        


      default:
        return state;
    }
  }
  

  const [tasksData, dispatchData] = useReducer(reducerData, initialState);

  const [searchValue, setSearchValue] = useState("");

  const tasksSearchFiltred = tasksData.filter((task) => (task.title.toLowerCase()).includes(searchValue.toLowerCase()));


  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeader}>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue } />
        <div className={styles.userInfo}>
          <div className={styles.notificationContainer}>
            <IoNotificationsOutline />
            <span className={styles.badgeNotification}></span>
          </div>
          <UserInfo />
        </div>
      </div>

      <div className={styles.taskManagerContainer}>
        <Routes>
          <Route path="/taskmanager" element={<TaskManager tasksData={searchValue ? tasksSearchFiltred : tasksData} dispatchData={dispatchData} />} />
          <Route path="/addtask" element={<AddTodo dispatchData={dispatchData} />} />
          <Route path="/*" element={<Navigate to="/taskmanager" />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
