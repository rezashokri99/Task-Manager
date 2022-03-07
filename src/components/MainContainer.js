import React from "react";
import styles from "./MainContainer.module.css";
import SearchInput from "./searchInput/SearchInput";
import { IoNotificationsOutline } from "react-icons/io5";
import UserInfo from "./userInfo/UserInfo";
import TaskManager from "./TaskManager";
import AddTodo from "./AddTodo";
import { Navigate, Route, Routes } from "react-router-dom";


const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeader}>
        <SearchInput />
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
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/*" element={<Navigate to="/taskmanager" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
