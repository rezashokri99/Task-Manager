import React from "react";
import styles from "./MainContainer.module.css";
import SearchInput from "./searchInput/SearchInput";
import { IoNotificationsOutline } from "react-icons/io5";
import UserInfo from "./userInfo/UserInfo";
import TaskManager from "./TaskManager";
import AddTodo from "./AddTodo";


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
        {/* <TaskManager /> */}
        <AddTodo />
      </div>
    </div>
  );
};

export default Main;
