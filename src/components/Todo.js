import React, { useRef, useState } from 'react';
import { MdMoreVert } from "react-icons/md";
import styles from "./Todo.InProgress.completed.module.css";
import editIcom from "../assets/icons/edit.svg";
import deleteIcom from "../assets/icons/delete.svg";
import ToInProgressIcon from "../assets/icons/taskToInProgress.svg";
import taskToCompleted from "../assets/icons/taskToCompleted.svg";



const Todo = (props) => {


    const [isActiveEdit, setActiveEdit] = useState(false);

    const listRef = useRef();


    const toggleClass = () => {
        setActiveEdit(!isActiveEdit);
    };


    return (
        <div key={props.id} className={styles.todo}>

            <div className={styles.todoHeaderSection}>
                
            
                
            <div className={styles.todoTitle}>{props.title}</div>
                <div ref={listRef} className={` ${styles.menu} ${isActiveEdit ? styles.open  : ""}`} onClick={toggleClass} >
                    

                    <div className={`${styles.con} ${styles.button}`}>
                            <div className={`${styles.conTooltip} ${styles.top}`}>
                                <p> <img src={taskToCompleted} style={{width: "18px", margin: "2px -1px"}} alt="editIcon" /> </p>
                                <div className={`${styles.tooltip} ${styles.tooltipLong}`} >
                                    <p>Add to Completed</p>
                                </div>
                            </div>
                    </div>

                    <div className={`${styles.con} ${styles.button}`}>
                        <div className={`${styles.conTooltip} ${styles.top}`}>
                            <p> <img src={ToInProgressIcon} style={{width: "18px", margin: "2px -1px"}} alt="editIcon" /> </p>
                            <div className={`${styles.tooltip} ${styles.tooltipLong}`} >
                                <p>Add to inprogress</p>
                            </div>
                        </div>
                    </div>


                    <div className={`${styles.con} ${styles.button}`}>
                        <div className={`${styles.conTooltip} ${styles.top}`}>
                            <p> <img src={deleteIcom} style={{width: "16px", margin: "3px .5px"}} alt="editIcon" /> </p>
                            <div className={styles.tooltip} >
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.con} ${styles.button}`}>
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
            </div>

            <div className={styles.todoMainSection}>
            <p>{props.description}</p>
            </div>

            <div className={styles.todofooterSection}>
            <div className={styles.todoTimeCreated}>
                <p>
                Created: <span>{props.createdTime}</span>
                </p>
            </div>
            <div className={styles.todoTimeUpdated}>
                <p>
                updated: <span>{props.updatedTime}</span>
                </p>
            </div>
            </div>


        </div>
    );
}
 
export default Todo;