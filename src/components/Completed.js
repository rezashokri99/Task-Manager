import React, { useRef, useState } from 'react';
import styles from "./Todo.InProgress.completed.module.css";
import editIcom from "../assets/icons/edit.svg";
import deleteIcom from "../assets/icons/delete.svg";
import ToInProgressIcon from "../assets/icons/taskToInProgress.svg";
import taskToTodoList from "../assets/icons/taskToTodoList.svg";
import { useNavigate } from 'react-router-dom';
import Notify from './Notify';




const InProgress = (props) => {


    const [isActiveEdit, setActiveEdit] = useState(false);

    const listRef = useRef();


    const toggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };

    const navigate = useNavigate();

    const editHandler = () => {
        props.dispatchData({type: "EDIT", id: props.id});
        navigate("/addtask");
    }

    const deleteHandler = () => {
        props.dispatchData({type: "DELETE", id: props.id});
        Notify(`${props.title} successfully removed.`, "error");
    }

    const addToInProgressHandler = () => {
        props.dispatchData({type: "ADDTOINPROGRESS", id: props.id});
        Notify(`${props.title} added to in progress.`, "change");
    }

    const addToTodoListHandler = () => {
        props.dispatchData({type: "ADDTOTodoList", id: props.id});
        Notify(`${props.title} added to do.`, "change");
    }




    return (
        <div key={props.id} className={styles.completed}>
                
            <div className={styles.completedHeaderSection}>
                <div className={styles.completedTitle}>{props.title}</div>
                <span>
                    <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open  : ""}`} onClick={toggleClass} >
                        

                    <div className={`${styles.con} ${styles.button}`}>
                        <div className={`${styles.conTooltip} ${styles.top}`} onClick={addToInProgressHandler}>
                            <p> <img src={ToInProgressIcon} style={{width: "18px", margin: "2px -1px"}} alt="editIcon" /> </p>
                            <div className={`${styles.tooltip} ${styles.tooltipLong}`} >
                                <p>Add to inprogress</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.con} ${styles.button}`} onClick={addToTodoListHandler}>
                            <div className={`${styles.conTooltip} ${styles.top}`}>
                                <p> <img src={taskToTodoList} style={{width: "18px", margin: "2px -1px"}} alt="editIcon" /> </p>
                                <div className={`${styles.tooltip} ${styles.tooltipLong}`} >
                                    <p>Add to Todolist</p>
                                </div>
                            </div>
                    </div>

                    <div className={`${styles.con} ${styles.button}`} onClick={deleteHandler}>
                        <div className={`${styles.conTooltip} ${styles.top}`}>
                            <p> <img src={deleteIcom} style={{width: "16px", margin: "3px .5px"}} alt="editIcon" /> </p>
                            <div className={styles.tooltip} >
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.con} ${styles.button}`} onClick={editHandler}>
                        <div className={`${styles.conTooltip} ${styles.top}`}>
                            <p> <img src={editIcom} style={{width: "14px", margin: "2px 1px"}} alt="editIcon" /> </p>
                            <div className={styles.tooltip} >
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>

                        
                        
                        {/* <div className={styles.button}></div>
                        <div className={styles.button}></div>
                        <div className={styles.button}></div> */}
                    </div>
                </span>
            </div>

            <div className={styles.completedMainSection}>
                <p>{props.description}</p>
            </div>

            <div className={styles.completedfooterSection}>
                
                <div className={styles.completedTimeCreated}>
                <p>
                    Created: <span>{props.createdTime}</span>
                </p>
                </div>

                <div className={styles.completedTimeUpdated}>
                <p>
                    updated: <span>{props.updatedTime}</span>
                </p>
                </div>

            </div>


        </div>
    );
}
 
export default InProgress;

