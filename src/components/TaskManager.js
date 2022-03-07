import React, { useState } from "react";
import Todo from "./Todo";
import styles from "./TaskManager.module.css";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import InProgress from "./InProgress";
import Completed from "./Completed";




const TaskManager = () => {
  const [tasksData, setTasksData] = useState(JSON.parse(localStorage.getItem("taskData")));


  const todosTask = tasksData.filter((task) => task.status === "todo");
  const inProgressTask = tasksData.filter((task) => task.status === "inProgress");
  const completedTask = tasksData.filter((task) => task.status === "completed");

  




  return (
    <>

    
      <p className={styles.taskManagerTitle}>Task Manager</p>

      <div className={styles.taskManager}>
        <div className={styles.todoSection}>
          <div className={styles.todoTypeTitle}>
            <p>To do</p>
            <span>2</span>
          </div>

          <Link to="/addtodo" className={styles.addTodoBtn}>
            +
          </Link>

          <div className={styles.todosList}>

            {
              todosTask.map((task) => <Todo key={task.id} {...task} />)
            }


            {/* <div className={styles.todo}>
              <div className={styles.todoHeaderSection}>
                <div className={styles.todoTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.todoMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>

              <div className={styles.todofooterSection}>
                <div className={styles.todoTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.todoTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className={styles.todo}>
              <div className={styles.todoHeaderSection}>
                <div className={styles.todoTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.todoMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint.
                </p>
              </div>

              <div className={styles.todofooterSection}>
                <div className={styles.todoTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.todoTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressTypeTitle}>
            <p>In progress</p>
            <span>2</span>
          </div>

          <Link to="/addtodo" className={styles.addProgressBtn}>
            +
          </Link>

          <div className={styles.progressesList}>

          {
              inProgressTask.map((task) => <InProgress key={task.id} {...task} />)
            }

            {/* <div className={styles.progress}>
              <div className={styles.progressHeaderSection}>
                <div className={styles.progressTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.progressMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>

              <div className={styles.progressfooterSection}>
                <div className={styles.progressTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.progressTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.progress}>
              <div className={styles.progressHeaderSection}>
                <div className={styles.progressTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.progressMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint.
                </p>
              </div>

              <div className={styles.progressfooterSection}>
                <div className={styles.progressTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.progressTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className={styles.completedSection}>
          <div className={styles.completedTypeTitle}>
            <p>In completed</p>
            <span>2</span>
          </div>

          <Link to="/addtodo" className={styles.addCompletedBtn}>
            +
          </Link>

          <div className={styles.completedsList}>


          {
            completedTask.map((task) => <Completed key={task.id} {...task} />)
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManager;
