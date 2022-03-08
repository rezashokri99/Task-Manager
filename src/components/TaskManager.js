import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import styles from "./TaskManager.module.css";
import { Link } from "react-router-dom";
import InProgress from "./InProgress";
import Completed from "./Completed";






    


const TaskManager = ({tasksData, dispatchData}) => {

  
  const [todosTask, setTodosTask] =  useState("");
  const [inProgressTask, setInProgressTask] =  useState("");
  const [completedTasks, setCompletedTasks] =  useState("");

  
  useEffect(() => {
    setTodosTask(tasksData.filter((task) => task.status === "todo"));
    setInProgressTask(tasksData.filter((task) => task.status === "inProgress"));
    setCompletedTasks(tasksData.filter((task) => task.status === "completed"));

  }, [tasksData])

  const statusHandler = (type) => {
    localStorage.setItem("statusclick", JSON.stringify(type));
  }

  return (
    <>

    
      <p className={styles.taskManagerTitle}>Task Manager</p>

      <div className={styles.taskManager}>
        
        <div className={styles.todoSection}>
          <div className={styles.todoTypeTitle}>
            <p>To do</p>
            <span>{todosTask.length}</span>
          </div>

          <Link to="/addtask" className={styles.addTodoBtn} onClick={() => statusHandler("todo")}>
            +
          </Link>

          <div className={styles.todosList}>

            {
              todosTask && todosTask.map((task) => <Todo key={task.id} dispatchData={dispatchData} {...task} />)
            }

          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressTypeTitle}>
            <p>In progress</p>
            <span>{inProgressTask.length}</span>
          </div>

          <Link to="/addtask" className={styles.addProgressBtn} onClick={() => statusHandler("inProgress")}>
            +
          </Link>

          <div className={styles.progressesList}>

            {
              inProgressTask && inProgressTask.map((task) => <InProgress key={task.id} dispatchData={dispatchData} {...task} />)
            }

          </div>
        </div>

        <div className={styles.completedSection}>
          <div className={styles.completedTypeTitle}>
            <p>In completed</p>
            <span>{completedTasks.length}</span>
          </div>

          <Link to="/addtask" className={styles.addCompletedBtn} onClick={() => statusHandler("completed")}>
            +
          </Link>

          <div className={styles.completedsList}>


            {
             completedTasks && completedTasks.map((task) => <Completed key={task.id} dispatchData={dispatchData} {...task} />)
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManager;
