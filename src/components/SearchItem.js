import React, { useRef, useState } from "react";
import editIcom from "../assets/icons/edit.svg";
import deleteIcom from "../assets/icons/delete.svg";
import taskToCompleted from "../assets/icons/taskToCompleted.svg";
import taskToTodoList from "../assets/icons/taskToTodoList.svg";
import ToInProgressIcon from "../assets/icons/taskToInProgress.svg";
import { useNavigate } from "react-router-dom";
import Notify from "./Notify";
import styles from "./SearchItem.module.css";

const SearchItem = (props) => {
  const [isActiveEdit, setActiveEdit] = useState(false);

  const listRef = useRef();

  const toggleClass = () => {
    setActiveEdit(!isActiveEdit);
  };

  const navigate = useNavigate();

  const editHandler = () => {
    props.dispatchData({ type: "EDIT", id: props.id });
    navigate("/addtask");
  };

  const deleteHandler = () => {
    props.dispatchData({ type: "DELETE", id: props.id });
    Notify(`${props.title} successfully removed.`, "error");
  };

  const addToTodoListHandler = () => {
    props.dispatchData({ type: "ADDTOTodoList", id: props.id });
    Notify(`${props.title} added to do.`, "change");
  };

  const addToInProgressHandler = () => {
    props.dispatchData({type: "ADDTOINPROGRESS", id: props.id});
    Notify(`${props.title} added to in progress.`, "change");
  }

  const addToCompletedHandler = () => {
    props.dispatchData({ type: "ADDTOINCOMPLETED", id: props.id });
    Notify(`${props.title} added to completed.`, "change");
  };


  const clickHandlerOne = () => {
      if (props.status === "todo") {
        addToCompletedHandler();
      } else if(props.status === "inProgress") {
        addToTodoListHandler();
      } else if (props.status === "completed") {
        addToInProgressHandler();
      }
  }

  const textHandlerOne = () => {
    if (props.status === "todo") {
        return "Add to Completed";
    } else if(props.status === "inProgress") {
        return "Add to do";
    } else if (props.status === "completed") {
        return "Add to inprogress";
    }
  }

  const imageHandlerOne = () => {
    if (props.status === "todo") {
        return taskToCompleted;
    } else if(props.status === "inProgress") {
        return taskToTodoList;
    } else if (props.status === "completed") {
        return ToInProgressIcon;
    }
  }




  const clickHandlerTwo = () => {
    if (props.status === "todo") {
         addToInProgressHandler();
    } else if(props.status === "inProgress") {
         addToCompletedHandler();
    } else if (props.status === "completed") {
        addToTodoListHandler();
    }
  }

  const textHandlerTwo = () => {
    if (props.status === "todo") {
        return "Add to inprogress";
    } else if(props.status === "inProgress") {
        return "Add to Completed";
    } else if (props.status === "completed") {
        return "Add to do";
    }
  }

  const imageHandlerTwo = () => {
    if (props.status === "todo") {
        return ToInProgressIcon;
    } else if(props.status === "inProgress") {
        return ToInProgressIcon;
    } else if (props.status === "completed") {
        return taskToTodoList;
    }
  }




  return (
    <div key={props.id} className={styles.progress}>
      <div className={styles.progressHeaderSection}>
        <div className={styles.progressTitle}>{props.title}</div>
        <span>
          <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open : ""}`} onClick={toggleClass}>
            
            <div className={`${styles.con} ${styles.button}`} onClick={clickHandlerOne}>
              <div className={`${styles.conTooltip} ${styles.top}`}>
                <p>
                  {" "}
                  <img src={imageHandlerOne()} style={{ width: "18px", margin: "2px -1px" }} alt="editIcon" />{" "}
                </p>
                <div className={`${styles.tooltip} ${styles.tooltipLong}`}>
                  <p>{textHandlerOne()}</p>
                </div>
              </div>
            </div>

            <div className={`${styles.con} ${styles.button}`} onClick={clickHandlerTwo}>
              <div className={`${styles.conTooltip} ${styles.top}`}>
                <p>
                  {" "}
                  <img src={imageHandlerTwo()} style={{ width: "18px", margin: "2px -1px" }} alt="editIcon" />{" "}
                </p>
                <div className={`${styles.tooltip} ${styles.tooltipLong}`}>
                  <p>{textHandlerTwo()}</p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.con} ${styles.button}`}
              onClick={deleteHandler}
            >
              <div className={`${styles.conTooltip} ${styles.top}`}>
                <p>
                  {" "}
                  <img
                    src={deleteIcom}
                    style={{ width: "16px", margin: "3px .5px" }}
                    alt="editIcon"
                  />{" "}
                </p>
                <div className={styles.tooltip}>
                  <p>Delete</p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.con} ${styles.button}`}
              onClick={editHandler}
            >
              <div className={`${styles.conTooltip} ${styles.top}`}>
                <p>
                  {" "}
                  <img
                    src={editIcom}
                    style={{ width: "14px", margin: "2px 1px" }}
                    alt="editIcon"
                  />{" "}
                </p>
                <div className={styles.tooltip}>
                  <p>Edit</p>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div className={styles.progressMainSection}>
        <p>{props.description}</p>
      </div>

      <div className={styles.progressfooterSection}>
        <div className={styles.progressTimeCreated}>
          <p>
            Created: <span>{props.createdTime}</span>
          </p>
        </div>

        <div className={styles.progressTimeUpdated}>
          <p>
            updated: <span>{props.updatedTime}</span>
          </p>
        </div>
      </div>
      <div className={styles.progressStatus}>Status: {props.status}</div>
    </div>
  );
};

export default SearchItem;
