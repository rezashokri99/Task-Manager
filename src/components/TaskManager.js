import React, { useState } from "react";
import styles from "./TaskManager.module.css";
import { MdMoreVert } from "react-icons/md";

const TaskManager = () => {
  const [tasksData, setTasksData] = useState([
    {
      id: 1,
      status: "todo",
      title: "programming",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et veniam, quis nostrudexercitation ullamcour.",
      createdTime: "3/6/2022, 11:14:02 PM",
      updatedTime: "3/6/2022, 11:14:02 PM"
    },
  ]);


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

          <a href="#2" className={styles.addTodoBtn}>
            +
          </a>

          <div className={styles.todosList}>

            {
              todosTask.map((task) => <div key={task.id} className={styles.todo}>
                <div className={styles.todoHeaderSection}>
                  <div className={styles.todoTitle}>{task.title}</div>
                  <MdMoreVert />
                </div>

                <div className={styles.todoMainSection}>
                  <p>{task.description}</p>
                </div>

                <div className={styles.todofooterSection}>
                  <div className={styles.todoTimeCreated}>
                    <p>
                      Created: <span>{task.createdTime}</span>
                    </p>
                  </div>
                  <div className={styles.todoTimeUpdated}>
                    <p>
                      updated: <span>{task.updatedTime}</span>
                    </p>
                  </div>
                </div>

              </div>
              )
            }


            <div className={styles.todo}>
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
            </div>

            <div className={styles.todo}>
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
            </div>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressTypeTitle}>
            <p>In progress</p>
            <span>2</span>
          </div>

          <a href="#2" className={styles.addProgressBtn}>
            +
          </a>

          <div className={styles.progressesList}>
            <div className={styles.progress}>
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
            </div>
          </div>
        </div>

        <div className={styles.completedSection}>
          <div className={styles.completedTypeTitle}>
            <p>In completed</p>
            <span>2</span>
          </div>

          <a href="#2" className={styles.addCompletedBtn}>
            +
          </a>

          <div className={styles.completedsList}>
            <div className={styles.completed}>
              <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.completedMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>

              <div className={styles.completedfooterSection}>
                <div className={styles.completedTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.completedTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.completed}>
              <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.completedMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint.
                </p>
              </div>

              <div className={styles.completedfooterSection}>
                <div className={styles.completedTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.completedTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.completed}>
              <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.completedMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>

              <div className={styles.completedfooterSection}>
                <div className={styles.completedTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.completedTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.completed}>
              <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>Gym</div>
                <MdMoreVert />
              </div>

              <div className={styles.completedMainSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et veniam, quis nostrud
                  exercitation ullamcour. Excepteur sint.
                </p>
              </div>

              <div className={styles.completedfooterSection}>
                <div className={styles.completedTimeCreated}>
                  <p>
                    Created: <span></span>
                  </p>
                </div>
                <div className={styles.completedTimeUpdated}>
                  <p>
                    updated: <span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManager;
